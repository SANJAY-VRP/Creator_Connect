const mongoose = require('mongoose');

// Define the rating schema
const ratingSchema = new mongoose.Schema({
  userEmail: { type: String, required: true }, // Email of the user being rated
  reviewerMail: { type: String, required: true }, // Email of the user who is rating
  stars: { type: Number, required: true }, // Number of stars given in the rating
  message: { type: String }, // Optional message provided by the user
});

// Create the Rating model
const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
