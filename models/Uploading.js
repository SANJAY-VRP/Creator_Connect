const mongoose = require('mongoose');

// Define the schema for the image post
const imagePostSchema = new mongoose.Schema({
  imagePath: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0 // Initialize the likes count to 0
  },
  likedBy: {
    type: [String], // Array of user emails who liked the upload
    default: [] // Initialize as an empty array
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model from the schema
const ImagePost = mongoose.model('ImagePost', imagePostSchema);

module.exports = ImagePost;
