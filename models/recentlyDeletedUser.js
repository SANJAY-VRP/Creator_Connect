// models/recentlyDeletedUser.js

const mongoose = require('mongoose');

// Define the schema for the RecentlyDeletedUser model
const recentlyDeletedUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  deletedAt: {
    type: Date,
    default: Date.now // Automatically set the deletedAt timestamp when the document is created
  }
});

// Create the RecentlyDeletedUser model
const RecentlyDeletedUser = mongoose.model('RecentlyDeletedUser', recentlyDeletedUserSchema);

module.exports = RecentlyDeletedUser;
