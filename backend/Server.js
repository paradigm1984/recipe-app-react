const express = require('express');
const cors = require('cors');
var logger = require("morgan");
const mongoose = require('mongoose');

require('dotenv').config();

// Require all models
// var db = require("./models");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

const uri = "mongodb://localhost/recipe-app";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const recipiesRouter = require('./routes/recipies-route');
const usersRouter = require('./routes/users-route');

app.use('/recipies', recipiesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});