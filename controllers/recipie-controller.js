// recipie-controller.js

const Recipie = require('../models/recipe-model');

// gets all recipies
exports.getRecipies = async (req, res, next) => {
 try {
  const recipies = await Recipie.find();

  return res.status(200).json({
   success: true,
   count: recipies.length,
   data: recipies
  });
 } catch (err) {
  return res.status(500).json({
   success: false,
   error: 'Server Error'
  });
 }
}