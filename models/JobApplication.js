// jobApplicationModel.js

const mongoose = require('mongoose');

// Define schema for job application
const jobApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  companyEmail: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  resume: {
    type: String, // Assuming you store the resume file path or link
    required: true
  },
  location: {
    type: String,
    required: true
  },
  whatsappNo: {
    type: String,
    required: true
  },
  linkedIn: {
    type: String
  },
  contactAddress: {
    type: String
  },
  jobType: {
    type: String
  },
  maritalStatus: {
    type: String
  },
  whyJob: {
    type: String
  },
  plus: {
    type: String
  },
  minus: {
    type: String
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job', // Reference to Job model
    required: true
  }
}, { timestamps: true });

// Define JobApplication model
const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = JobApplication;
