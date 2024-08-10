import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JobDisplaying.css';
import JobApplication from './JobApplication';

const JobsDisplaying = ({ userEmail }) => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Fetch jobs associated with the user's email
        const response = await axios.get(`/api/jobs?email=${userEmail}`);
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, [userEmail]);

  const handleApplyNowClick = (job) => {
    setSelectedJob(job);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = jobs.filter(job =>
    job.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='jobcontainer_1'>
      <h2>Jobs</h2>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search by role..." 
          value={searchTerm} 
          onChange={handleSearch} 
        />
      </div>
      {!selectedJob && filteredJobs.map((job, index) => (
        <div className='job_box_1' key={index}>
          <h3>{job.role}</h3>
          <p>Company Email: <span>{job.email}</span></p> {/* Display company email */}
          <p>Salary: <span>{job.salary}</span> </p>
          <p>Last Date to Apply: <span>{job.lastDate}</span></p>
          <p>Requirements: <span>{job.requirements}</span></p>
          <p>Number of Openings: <span>{job.openings}</span></p>
          <center><button onClick={() => handleApplyNowClick(job)}>Apply Now</button></center>
        </div>
      ))}
      {selectedJob && <JobApplication job={selectedJob} />}
    </div>
  );
};

export default JobsDisplaying;
