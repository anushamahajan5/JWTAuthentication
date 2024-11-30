//this file connects to database i.e. mongodb

const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const DB_URL = process.env.DB_URL; // Get DB_URL from .env file

if (!DB_URL) {
    console.error("Error: DB_URL is not defined in the .env file");
    process.exit(1); // Exit the application if the URL is missing
}

mongoose.connect(DB_URL, {
   tlsAllowInvalidCertificates: true
});

mongoose.connection.on("Connected", () => {
    console.log("Connected to MongoDB");
})

mongoose.connection.on("error", (err) => {
    console.log(`MongoDB connection error: ${err}`)
})

module.exports = mongoose;
