import React, { useState } from 'react';
import ContactForm from './Connector';
import DisplayWorks from './DisplayWorks'; 
import EmailSender from './EmailSender'; 
import RatingPopup from './Rating';
import axios from 'axios';
import DisplayingRating from './DisplayingRating';

const Portfolio = ({ user, onClose }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleConnectClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  const handleEmailSent = () => {
    setEmailSent(true);
  };

  const handleLike = async (id) => {
    try {
        await axios.post(`/api/upload/like/${id}`);
        // Optionally, you can fetch the updated uploads after liking to reflect the updated like count
    } catch (error) {
        console.error('Error liking upload:', error);
    }
  };

  return (
    <div className="relative text-gray-800 bg-gray-50">
      <section className="classportfolio flex flex-col items-center justify-center h-screen -my-20 md:-mt-48 px-8">
        <div className="flex flex-col items-center justify-center text-center h-screen-half">
          <img className="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]" src={user.image} alt="User" />
          <h1 className="text-5xl sm:text-6xl lg:text-9xl">{user.name}</h1>
          <h2 className="font-light text-4xl sm:text-5xl lg:text-8xl">{user.message}</h2>
        </div>
      </section>

      <section className="flex items-center justify-between px-8 mb-20 tracking-wider">
        <div className="flex flex-col w-full md:w-1/3 space-y-12 text-center md:text-left">
          <div className="flex flex-col px-10 md:px-20">
            <h3 className="text-xl font-bold">{user.skill}</h3>
            <br />
            <span className="text-lg">{user.experience}</span>
          </div>
          <div className="px-10 md:px-20">
            <h3 className="text-xl font-bold">Summary</h3>
            <br />
            <p className="w-full md:w-2/3">{user.objective}</p>
          </div>
          <div className="px-10 md:px-20">
            <br />
            <h3 className="text-xl font-bold">Contact</h3>
            <a className="text-xl hover:text-blue-600" href={`mailto:${user.email}`}>{user.email}</a>
            <p>{user.phoneNumber}</p>
          </div>
        </div>
        <img className="hidden md:block object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]" src={user.image} alt="User" />
        <div className="hidden md:flex flex-col w-1/3 space-y-12 text-right">
          <div className="px-20">
            <h4 className="text-xl font-bold">{user.country}</h4>
            <br />
            <p className="text-6xl">{user.address}</p>
          </div>
          <div className="px-20">
            <h4 className="text-xl font-bold">{user.state}</h4>
          </div>
        </div>
      </section>

      <hr className="border-gray-400 mx-44" />

      <footer className="absolute w-full h-36 bottom-0 p-8 px-16 bg-gray-800 text-gray-50">
        <p className="text-2xl">Thank you for checking out my portfolio</p>
      </footer>
      <div className="h-80"></div>

      <div>
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleConnectClick}>Connect</button>
        {emailSent && <p>Email sent successfully!</p>}
      </div>

      {showContactForm && (
        <ContactForm
          onSuccess={() => {
            handleCloseContactForm();
            handleEmailSent();
          }}
          userEmail={user.email} 
        />
      )}

      {!showContactForm && emailSent && (
        <EmailSender
          onEmailSent={handleEmailSent}
          recipientEmail={user.email}
          onCancel={handleCloseContactForm} 
        />
      )}

      {/* DisplayWorks and DisplayingRating components to be included here */}
      <DisplayWorks userEmail={user.email} />
      <DisplayingRating userEmail={user.email} />
      
      {/* RatingPopup component */}
      <RatingPopup userEmail={user.email} reviewerEmail={user.email} />
    </div>
  );
};

export default Portfolio;
