const mongoose = require('mongoose');

const SignUpUsersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});

const  SignUpUsers = mongoose.model('SignUpUsers', SignUpUsersSchema);

module.exports = SignUpUsers;
