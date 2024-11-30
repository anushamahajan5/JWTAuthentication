const bcrypt = require("bcrypt");
const User = require("../models/user");
const { generateToken } = require("../utils/jwtUtils");
const { verifyToken} = require("../utils/authMiddleware");

async function login(email, password) {
    try{
        const existingUser = await User.findOne({email});
        if(!existingUser){
            throw new Error("User not found");
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordValid){
            throw new Error("Incorrect Password");
        }
        const token = generateToken(existingUser);
        return token;
    }catch(error){
        console.error("Login Error:", error.message);
        throw new Error("Invalid credentials");
    }
}

async function refreshToken(oldToken) {
    try{
        const decodedToken = verifyToken(oldToken);
    const user = User.findById(decodedToken._id);
    if(!user){
        throw new error("USer not Found!");
    };
    const newToken = generateToken(user);
    return newToken;
    }catch(error){
        throw new error("Invalid Token");
    }
}

module.exports = {
    login, refreshToken
}
