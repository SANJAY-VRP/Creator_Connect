import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JobListing.css';

const JobListing = ({ userEmail }) => {
  const [job, setJob] = useState({
    role: '',
    salary: '',
    lastDate: '',
    requirements: '',
    openings: 0,
    email: userEmail || '', // Use userEmail to pre-fill the email field
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [jobs, setJobs] = useState([]); // State to store job listings

  // Rest of your component remains the same
 // State to store job listings

  useEffect(() => {
    // Fetch user's email from session and pre-fill the email field
    const userEmail = sessionStorage.getItem('userEmail');
    if (userEmail) {
      setJob(prevJob => ({
        ...prevJob,
        email: userEmail
      }));
    }
  }, []); // Run only once on component mount

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make sure the job object is properly formatted before sending
      const newJobData = {
        ...job,
        openings: parseInt(job.openings) // Convert openings to integer
      };

      // Send POST request to the backend
      const response = await axios.post('/api/jobs', newJobData);

      // Log the response and reset the form
      console.log('Job added successfully:', response.data);
      setSuccessMessage('Job added successfully');
      setJob({
        role: '',
        salary: '',
        lastDate: '',
        requirements: '',
        openings: 0,
        email: job.email, // Preserve email field value
      });

      // Add the newly created job to the jobs list
      setJobs([...jobs, response.data]);
    } catch (error) {
      // Handle errors
      console.error('Error adding job:', error);
    }
  };

  return (
    <div className="job-listing-container">
      <div className="job-form">
        <h1>Add Jobs</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="role">Job Role:</label>
            <input className='i' type="text" id="role" name="role" placeholder="Enter job role" value={job.role} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary:</label>
            <input  className='i'  type="text" id="salary" name="salary" placeholder="Enter salary" value={job.salary} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastDate">Last Date to Apply:</label>
            <input  className='i'  type="date" id="lastDate" name="lastDate" value={job.lastDate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="requirements">Requirements:</label>
            <input  className='i'  type="text" id="requirements" name="requirements" placeholder="Enter requirements" value={job.requirements} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="openings">Number of Openings:</label>
            <input  className='i'  type="number" id="openings" name="openings" placeholder="Enter number of openings" value={job.openings} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input  className='i'  type="email" id="email" name="email" placeholder="Enter your email" value={job.email} onChange={handleChange} />
          </div>
          <button type="submit">Add Job</button>
        </form>
      </div>
      <div className="job-cards">
        {jobs.map((jobItem, index) => (
          <div key={index} className="job-card">
              <h3>Added Successfully</h3>
            <h3>Role: {jobItem.role} </h3>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListing;
