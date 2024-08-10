// models/Job.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/jobss', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const jobSchema = mongoose.Schema({
  role: String,
  salary: String,
  lastDate: String,
  requirements: String,
  openings: Number,
  applicants: Number,
  email: String, // Add email field
});

module.exports = mongoose.model('Job', jobSchema);
