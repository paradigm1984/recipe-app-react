// server.js - root file

const express = require("express");
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const path = require("path");
const app = express();
// const port = process.env.PORT || 5000;
const port = 5000;

const recipiesRouter = require('./routes/recipie-router');
const usersRouter = require('./routes/user-router');

require('dotenv').config();


// db connection
require('./config/db.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/recipies', recipiesRouter);
app.use('/users', usersRouter);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


app.listen(port, () => {
    console.log(`server is running on port: ${port}`.blue.bold)
});