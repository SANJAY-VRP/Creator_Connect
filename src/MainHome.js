// MainHome.js
import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import JobListing from './JobListing';
import JobDisplaying from './JobDisplaying';
import ApplicantList from './ApplicantList';
import DisplayingUser from './DisplayingUser';
import Uploading from './Uploading';
import Feed from './Feed'; // Import the Feed component
import './MainHome.css';
import Portfolio from './PorfolioTailwind';

import DisplayingRating from './DisplayingRating';


function MainHome({ userEmail   }) {
  const [selectedService, setSelectedService] = useState('feed'); // Initialize with 'feed'
  const [profileFormVisible, setProfileFormVisible] = useState(false);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    if (service === 'profile') {
      setProfileFormVisible(true);
    } else {
      setProfileFormVisible(false);
    }
  };

  const hideComponent = () => {
    setSelectedService('feed'); // Reset to 'feed' when canceling service
    setProfileFormVisible(false);
  };

  return (
    <div>
      <div className="services-dropdown">
        <button className="dropbtn">Services</button>
        <div className="dropdown-content">
          <button onClick={() => handleServiceSelect('jobListing')}>Job Listing</button>
          <button onClick={() => handleServiceSelect('jobs')}>Jobs</button>
          <button onClick={() => handleServiceSelect('allUsers')}>All Users</button>
          <button onClick={() => handleServiceSelect('profile')}>Edit Profile</button>
          <button onClick={() => handleServiceSelect('applicantlist')}>Applicant List</button>
          <button onClick={() => handleServiceSelect('uploading')}>Add Works</button>

          <button onClick={() => handleServiceSelect('displayingrating')}>My Reviews</button>
    
          <button onClick={() => handleServiceSelect('feed')}>Feed</button> {/* Add feed option */}
          <button onClick={() => handleServiceSelect('portfoliotailwind')}>port</button> {/* Add feed option */}
        </div>
      </div>

      {selectedService === 'feed' && <Feed />} {/* Render the Feed component */}
      
      {selectedService !== 'feed' && (
        <React.Fragment> {/* Use React.Fragment to wrap multiple elements */}
          <div className="selected-service">
            <button onClick={hideComponent}>Cancel</button>
            {selectedService === 'jobListing' && <JobListing userEmail={userEmail} />}
            {selectedService === 'jobs' && <JobDisplaying  />}
            {selectedService === 'allUsers' && <DisplayingUser />}
            {selectedService === 'applicantlist' && <ApplicantList userEmail={userEmail} />}
            {selectedService === 'uploading' && <Uploading userEmail={userEmail} />} {/* Pass userEmail prop */}

            {selectedService === 'displayingrating' && <DisplayingRating userEmail={userEmail} />}
            {selectedService === 'portfoliotailwind' && <Portfolio/>}

      
          </div>
          {profileFormVisible && <ProfileForm onHide={hideComponent} userEmail={userEmail} />}
        </React.Fragment>
      )}
    </div>
  );
}

export default MainHome;
