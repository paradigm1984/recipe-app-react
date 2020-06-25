// user-controller.js

const User = require('../models/user-model');

// gets all users
exports.getUsers = async (req, res, next) => {
 try {
  const users = await User.find();

  return res.status(200).json({
   success: true,
   count: users.length,
   data: users
  });
 } catch (err) {
  return res.status(500).json({
   success: false,
   error: 'Server Error'
  });
 }
}