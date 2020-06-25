const Router = require('express').Router();
let Recipe = require('../models/recipe.model');

// '(/)' GET request returns all exercises
Router.route('/').get((req, res) => {
    Recipe.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('ERROR:' + err));
});

// '/add' POST request adds a new exercise to the db
Router.route('/add').post((req, res) => {
    // const userName = req.body.userName;
    // const description = req.body.description;
    // const date = Date.parse(req.body.date);
    // const newRecipe = new Recipe({
    //     userName,
    //     description,
    //     duration,
    //     date
    // });
    // newRecipe.save()
    //     .then(() => res.json("Recipe added successfully!"))
    //     .catch(err => res.status(400).json('ERROR:' + err));
});

// '/:id' GET request returns exercise by ID
Router.route('/:id').get((req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => res.json(recipe))
        .catch(err => res.status(400).json('ERROR:' + err));
});

// '/:id' POST request deletes exercise by ID
Router.route('/:id').delete((req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then(recipe => res.json("Exercise deleted succesfully!"))
        .catch(err => res.status(400).json('ERROR:' + err));
});

// '/:id' POST request updates exercise by ID
Router.route('/update/:id').post((req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => {
            recipe.userName = req.body.userName;
            recipe.description = req.body.description;
            recipe.duration = Number(req.body.duration);
            recipe.date = Date.parse(req.body.date);

            recipe.save()
            .then(() => res.json("Exercise updated successfully!"))
            .catch(err => res.status(400).json('ERROR:' + err));
        })
        .catch(err => res.status(400).json('ERROR:' + err));
});

module.exports = Router;