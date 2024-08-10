import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Feed.css'; // Make sure to create a CSS file for styling if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrashAlt, faPalette, faVideo, faMagic, faPen, faSearch, faChartBar, faUsers, faBullhorn, faBriefcase, faGlobe, faEnvelope, faFilm, faBuilding, faChalkboardTeacher, faMailBulk, faAd, faYoutube } from '@fortawesome/free-solid-svg-icons';
const buttonStyle = {
  backgroundColor: 'white',
  border:'1px solid grey',
  margin:'5px',
};

function UploadsList() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const response = await axios.get('/api/alluploads');
        setUploads(response.data);
      } catch (error) {
        console.error('Error fetching uploads:', error);
      }
    };

    fetchUploads();
  }, []);

  const handleDeleteUpload = async (id) => {
    try {
      await axios.delete(`/api/uploads/delete/${id}`);
      // After successful deletion, update the uploads list
      const response = await axios.get('/api/alluploads');
      setUploads(response.data);
    } catch (error) {
      console.error('Error deleting upload:', error);
    }
  };

  return (
    <div className='uploads-container'>
      <h2>Uploads List</h2>
      {uploads.map(upload => (
        <div key={upload._id} className="upload-item">
          <img src={`http://localhost:3001/${upload.imagePath}`} alt={upload.description} />
          <center><h5>{upload.description}</h5></center>
          <center><button style={buttonStyle}  onClick={() => handleDeleteUpload(upload._id)}>                    <center> <FontAwesomeIcon className='red' icon={faTrashAlt} /></center>  </button></center>
        </div>
      ))}
    </div>
  );
}

export default UploadsList;
