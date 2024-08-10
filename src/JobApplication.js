import React, { useState } from 'react';
import axios from 'axios';
import './JobApplication.css';

function JobApplication({ job, userEmail }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyEmail: job.email, // Pre-fill with company email
    userEmail: userEmail, // Pre-fill with user email
    resume: null,
    location: '',
    whatsappNo: '',
    linkedIn: '',
    contactAddress: '',
    jobType: '',
    maritalStatus: '',
    whyJob: '',
    plus: '',
    minus: ''
  });
  
  const [submissionStatus, setSubmissionStatus] = useState({
    submitted: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: name === 'resume' ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      formDataToSend.append('jobId', job._id); // Assuming job._id exists

      const response = await axios.post('/api/job-applications', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Job application submitted:', response.data);
      setSubmissionStatus({ submitted: true, success: true, error: false });
    } catch (error) {
      console.error('Error submitting job application:', error);
      setSubmissionStatus({ submitted: true, success: false, error: true });
    }
  };

  return (
    <div className='job-application-container'>
       {!submissionStatus.submitted && (
      <div className='whichjob'>
      <h2>Job Application for {job.role}</h2>
      <p>Salary: {job.salary}</p>
      <p>Last Date to Apply: {job.lastDate}</p>
      <p>Requirements: {job.requirements}</p>
      <p>Number of Openings: {job.openings}</p>
      </div>
       )}
        {!submissionStatus.submitted && (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="companyEmail">Company Email:</label>
          <input type="email" id="companyEmail" name="companyEmail" value={formData.companyEmail} readOnly />
        </div>
        <div>
          <label htmlFor="userEmail">Your Email:</label>
          <input type="email" id="userEmail" name="userEmail" value={formData.userEmail} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="resume">Resume:</label>
          <input type="file" id="resume" name="resume" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="whatsappNo">WhatsApp Number:</label>
          <input type="text" id="whatsappNo" name="whatsappNo" value={formData.whatsappNo} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="linkedIn">LinkedIn:</label>
          <input type="text" id="linkedIn" name="linkedIn" value={formData.linkedIn} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="contactAddress">Contact Address:</label>
          <input type="text" id="contactAddress" name="contactAddress" value={formData.contactAddress} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="jobType">Job Type:</label>
          <input type="text" id="jobType" name="jobType" value={formData.jobType} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="maritalStatus">Marital Status:</label>
          <input type="text" id="maritalStatus" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="whyJob">Why do you want this job?</label>
          <textarea id="whyJob" name="whyJob" value={formData.whyJob} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="plus">What are your plus points?</label>
          <textarea id="plus" name="plus" value={formData.plus} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="minus">What are your minus points?</label>
          <textarea id="minus" name="minus" value={formData.minus} onChange={handleChange} />
        </div>
       
        <button type="submit">Submit Application</button>
      </form>)}
      {submissionStatus.submitted && submissionStatus.success && (
        <div className="success-message">Successfully submitted!</div>
      )}
      {submissionStatus.submitted && submissionStatus.error && (
        <div className="error-message">Error submitting application. Please try again later.</div>
      )}
    </div>
  );
}

export default JobApplication;
