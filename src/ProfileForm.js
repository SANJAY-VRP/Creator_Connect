import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfileForm.css';

function ProfileForm({ onHide, userEmail }) {
  const [formData, setFormData] = useState({
    message: '',
    objective: '',
    name: '',
    age: '',
    state: '',
    country: '',
    phoneNumber: '',
    address: '',
    email: userEmail, // Pre-fill email field with userEmail
    skill: '',
    experience: '',
    image: null
  });

  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.post('/api/profile/get', { email: userEmail });
        const userProfile = response.data;
        if (userProfile) {
          setFormData(userProfile); // Set the form data with the fetched user profile
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [userEmail]); // Fetch user profile when userEmail changes

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/profile/create', formData); // Changed to POST request
      console.log("entering in axios")
      setAlertMessage('Profile created successfully!');

      setTimeout(() => {
        setAlertMessage('');
        onHide(); // Invoke onHide to hide the ProfileForm
      }, 2000);
    } catch (error) {
      console.error('Error creating profile:', error);
      setAlertMessage('Failed to create profile. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      const imageData = reader.result;
      setFormData(prevFormData => ({
        ...prevFormData,
        image: imageData
      }));
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {alertMessage ? (
        <div className={`alert ${alertMessage.includes('successfully') ? 'alert-success' : 'alert-danger'}`} role="alert">
          {alertMessage}
        </div>
      ) : (
        <form className='inputs' onSubmit={handleSubmit}>
          <h1>Create Your Profile</h1>
          {/* Render input fields without condition */}
          <>
            <input placeholder='Profession' type="text" name="message" value={formData.message} onChange={handleChange} />
            <input placeholder='Objective' type="text" name="objective" value={formData.objective} onChange={handleChange} />
            <input placeholder='Name' type="text" name="name" value={formData.name} onChange={handleChange} />
            <input placeholder='Age' type="text" name="age" value={formData.age} onChange={handleChange} />
            <input placeholder='State' type="text" name="state" value={formData.state} onChange={handleChange} />
            <input placeholder='Country' type="text" name="country" value={formData.country} onChange={handleChange} />
            <input placeholder='Phone Number' type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            <input placeholder='Address' type="text" name="address" value={formData.address} onChange={handleChange} />
            {/* Email field is pre-filled with userEmail and disabled */}
            <input placeholder='Email' type="text" name="email" value={formData.email} onChange={handleChange} disabled />
            <input placeholder='Skill' type="text" name="skill" value={formData.skill} onChange={handleChange} />
            <input placeholder='Experience' type="text" name="experience" value={formData.experience} onChange={handleChange} />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button type="submit">Create Profile</button>
          </>
        </form>
      )}
    </div>
  );
}

export default ProfileForm;
