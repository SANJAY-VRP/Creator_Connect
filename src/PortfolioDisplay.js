import React from 'react';
import './PortfolioDisplay.css';
import Uploading from './Uploading'; // Assuming Uploading.js is in the same directory

function ProfileDisplay({ profile }) {
  const renderImage = () => {
    if (!profile || !profile.image) {
      return null; // If profile or image data is not available, return null
    }
  
    // Render the image from the Base64 string
    return <img className="profile-images" src={profile.image} alt="Profile Image" />;
  };

  return (
    <div className="profile-display">
      <h2 className="profile-heading">Profile Details</h2>
      <div>
        {/* Render the image */}
        {renderImage()}
        <p className="profile-detail">Message: {profile.message}</p>
        <p className="profile-detail">Objective: {profile.objective}</p>
        <p className="profile-detail">Name: {profile.name}</p>
        <p className="profile-detail">Age: {profile.age}</p>
        <p className="profile-detail">State: {profile.state}</p>
        <p className="profile-detail">Country: {profile.country}</p>
        <p className="profile-detail">Phone Number: {profile.phoneNumber}</p>
        <p className="profile-detail">Address: {profile.address}</p>
        <p className="profile-detail">Email: {profile.email}</p>
        <p className="profile-detail">Skill: {profile.skill}</p>
        <p className="profile-detail">Experience: {profile.experience}</p>
        
        <Uploading/> {/* Assuming this component is required */}
      </div>
    </div>
  );
}

export default ProfileDisplay;
