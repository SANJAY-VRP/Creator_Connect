const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  message: String,
  skill: String,
  image: String, // Assuming image is stored as a URL
});

const User = mongoose.model('User', userSchema);

module.exports = User;
