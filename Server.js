// server.js - root file

const express = require("express");
const colors = require('colors');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));

    // Express serve up index.html file if it doesn't recognize route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

if (process.env.NODE_ENV === "dev") {
    // Express will serve up production assets
    app.use(express.static("public"));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve("public", "index.html"))
    );
}


app.listen(port, () => {
    console.log(`server is running on port: ${port}`.blue.bold)
});