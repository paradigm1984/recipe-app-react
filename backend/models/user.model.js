// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a UserSchema with the Schema class
var UserSchema = new Schema({
    // name: a unique String
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: 3
    },
 }, {
      timestamps: true,
 });

 const User = mongoose.model('User', UserSchema);
 module.exports = User;