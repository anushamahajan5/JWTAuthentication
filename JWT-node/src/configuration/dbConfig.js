//this file connects to database i.e. mongodb

const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const url = process.env.DB_URL; // Get DB_URL from .env file

if (!url) {
    console.error("Error: DB_URL is not defined in the .env file");
    process.exit(1); // Exit the application if the URL is missing
}

mongoose.connect(url, {
    useNewUrlParser: true,
   useUnifiedTopology: true,
   tlsAllowInvalidCertificates: true
});

mongoose.connection.on("Connected", () => {
    console.log("Connected to MongoDB");
})

mongoose.connection.on("error", (err) => {
    console.log(`MongoDB connection error: ${err}`)
})

module.exports = mongoose;
