// RecentlyDeletedProfilesBox.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecentlyDeletedProfilesBox = () => {
  const [deletedProfiles, setDeletedProfiles] = useState([]);

  useEffect(() => {
    const fetchDeletedProfiles = async () => {
      try {
        const response = await axios.get('/api/recently-deleted-users');
        setDeletedProfiles(response.data); // Assuming the response data is an array of recently deleted profiles
      } catch (error) {
        console.error('Error fetching recently deleted profiles:', error);
      }
    };

    fetchDeletedProfiles();
  }, []);

  return (
    <div className="deleted-profiles-box">
      <h3>Recently Deleted Profiles</h3>
      <ul>
        {deletedProfiles.map(profile => (
          <li key={profile._id}>
            <div>
              <img src={profile.image} alt="Profile" />
            </div>
            <div>
              <p>Name: {profile.name}</p>
              <p>Email: {profile.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentlyDeletedProfilesBox;
