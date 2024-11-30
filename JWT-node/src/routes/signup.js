//this file posts data at the /register endpoint
const express = require("express");
const signupController = require("../controllers/signup");

const router = express.Router();

router.post("/register", signupController.createUser);

module.exports = router;