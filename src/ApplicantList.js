// ApplicantList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ApplicantList.css';
import ContactUs from './EmailSender'; // Corrected import statement

const ApplicantList = ({ userEmail }) => {
  const [applicants, setApplicants] = useState([]);
  const [error, setError] = useState(null);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [isEmailSent, setIsEmailSent] = useState(false);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get('/api/job-applications');
        const filteredApplicants = response.data.filter(applicant => applicant.companyEmail === userEmail);
        setApplicants(filteredApplicants);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchApplicants();
  }, [userEmail]);

  const handleContactClick = (applicant) => {
    setSelectedApplicant(applicant);
  };

  const handleEmailSent = () => {
    setIsEmailSent(true);
    setSelectedApplicant(null);
  };

  const handleResetForm = () => {
    setIsEmailSent(false);
  };

  return (
    <div className='applicantbox'>
      <h2>Applicant List</h2>
      {error && <p>Error: {error}</p>}
      {selectedApplicant && !isEmailSent && <ContactUs recipientEmail={selectedApplicant.userEmail} onEmailSent={handleEmailSent} />}
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Company Email</th>
            <th>Applicant Email</th>
            <th>Location</th>
            <th>Resume</th>
            <th>WhatsApp Number</th>
            <th>LinkedIn</th>
            <th>Contact Address</th>
            <th>Job Type</th>
            <th>Marital Status</th>
            <th>Why do you want this job?</th>
            <th>Plus Points</th>
            <th>Minus Points</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant) => (
            <tr key={applicant._id}>
              <td>{applicant.fullName}</td>
              <td>{applicant.companyEmail}</td>
              <td>{applicant.userEmail}</td>
              <td>{applicant.location}</td>
              <td>
                <a href={applicant.resume} target="_blank" rel="noopener noreferrer">View Resume</a>
              </td>
              <td>{applicant.whatsappNo}</td>
              <td>{applicant.linkedIn}</td>
              <td>{applicant.contactAddress}</td>
              <td>{applicant.jobType}</td>
              <td>{applicant.maritalStatus}</td>
              <td>{applicant.whyJob}</td>
              <td>{applicant.plus}</td>
              <td>{applicant.minus}</td>
              <td>
                <button onClick={() => handleContactClick(applicant)} disabled={isEmailSent || selectedApplicant === applicant}>
                  {isEmailSent || selectedApplicant === applicant ? 'Contacted' : 'Contact'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEmailSent && <div className="success-message">Email sent successfully!</div>}
      {isEmailSent && <button onClick={handleResetForm}>Reset Form</button>}
    </div>
  );
}

export default ApplicantList;
