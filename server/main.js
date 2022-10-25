// Configuring main.js
// Import express module

const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

// Use express() to start our app
const app = express();

const PORT = process.env.PORT || 5000;

// listen
// Using the app, create a get method for the endpoint http://localhost:4000.
app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);