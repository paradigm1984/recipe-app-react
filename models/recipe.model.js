// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a ExerciseSchema with the Schema class
var ExerciseSchema = new Schema({
    // name: a unique String
   userName: { type: String, required: true }, 
   description: { type: String, required: true }, 
   duration: { type: Number, required: true }, 
   date: { type: Date, required: true }, 
  }, {
      timestamps: true,
  });

  const Exercise = mongoose.model('Exercise', ExerciseSchema);
  module.exports = Exercise;