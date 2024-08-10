const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  message: String,
  objective: String,
  name: String,
  age: String,
  state: String,
  country: String,
  phoneNumber: String,
  address: String,
  email: String,
  skill: String,
  experience: String,
  // Update the image field to store the image data as a string
  image: String,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
