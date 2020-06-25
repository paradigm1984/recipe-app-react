const Router = require('express').Router();
let User = require('../models/user.model');

// '(/)' GET request returns all users
Router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('ERROR:' + err));
});

// '/add' POST request adds a new user to the db
Router.route('/add').post((req, res) => {

    const userName = req.body.userName;
    const newUser = new User({userName});

    newUser.save()
        .then(() => res.json("User added successfully!"))
        .catch(err => res.status(400).json('ERROR:' + err));
});

module.exports = Router