// Configuring main.js
// Import express module

const express = require("express");
const cors = require("cors");

const databaseConfiguration = require('./configurations/database.js');

const dotenv = require("dotenv");

dotenv.config();

// Use express() to start our app
const app = express();

const PORT = process.env.PORT || 5000;

//connecting to the mongodb database
databaseConfiguration();

// add the middlewares
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('<h1>Server is up and running</h1>'));

// listen
// Using the app, create a get method for the endpoint http://localhost:4000.
app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);