import React, { useState } from 'react';

import Uploading from './Uploading';
import PortfolioDisplay from './PortfolioDisplay';
import ProfileForm from './ProfileForm'; // Import the ProfileForm component
import './ProfileForm.css';
function Erichal() {
  // State variables to store user input and portfolio data
  const [message, setMessage] = useState('');
  const [objective, setObjective] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [skill, setSkill] = useState('');
  const [experience, setExperience] = useState('');
  const [image, setImage] = useState('');
  const [portfolio, setPortfolio] = useState(null);
  const [profileCreated, setProfileCreated] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a portfolio object with user input
    const portfolioData = {
      message,
      objective,
      name,
      age,
      state,
      country,
      phoneNumber,
      address,
      email,
      skill,
      experience,
      image,
      uploadedImages
    };

    // Set the portfolio state
    setPortfolio(portfolioData);
    setProfileCreated(true);
  };

  return (
    <div>
      {!profileCreated && (
        <ProfileForm
          message={message}
          objective={objective}
          name={name}
          age={age}
          state={state}
          country={country}
          phoneNumber={phoneNumber}
          address={address}
          email={email}
          skill={skill}
          experience={experience}
          image={image}
          setMessage={setMessage}
          setObjective={setObjective}
          setName={setName}
          setAge={setAge}
          setState={setState}
          setCountry={setCountry}
          setPhoneNumber={setPhoneNumber}
          setAddress={setAddress}
          setEmail={setEmail}
          setSkill={setSkill}
          setExperience={setExperience}
          setImage={setImage}
          handleSubmit={handleSubmit}
        />
      )}

      {/* Display portfolio if created */}
      {profileCreated && portfolio && (
        <PortfolioDisplay portfolio={portfolio} uploadedImages={uploadedImages} />
      )}
    </div>
  );
}

export default Erichal;
