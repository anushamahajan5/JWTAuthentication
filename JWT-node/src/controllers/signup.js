//this file tells what happens after user sign in

const userService = require("../services/signup");//function that saves user in database

async function createUser(req, res) {
    try {
        const { name, email, password } = req.body;
        
        // Basic Validation
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Save User
        const user = await userService.createUser({ name, email, password });
        res.status(201).json({ user, message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
    }
}

module.exports = { createUser};