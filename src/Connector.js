import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Connector.css';

const ContactForm = ({ onSuccess, userEmail }) => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [contactLink, setContactLink] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const templateParams = {
      to_name: 'Recipient Name',
      from_name: formData.get('name'),
      from_email: 'sanjayperiyar122@gmail.com', // Replace with your email address
      subject: formData.get('subject'),
      name: formData.get('name'),
      profession: formData.get('profession'),
      message: formData.get('message'),
      phone: formData.get('phone'),
      contactMethod: contactMethod,
      contactLink: contactLink,
      to_email: formData.get('recipientEmail')
    };

    emailjs
      .send(
        'service_bba9iic',
        'template_p8tfdyf',
        templateParams,
        'y_j3t0yvYV-joj7Sy'
      )
      .then(
        (response) => {
          setStatus('SUCCESS');
          onSuccess(); // Call the parent component function to indicate success
          console.log('Email sent successfully:', response);
        },
        (error) => {
          setStatus('FAILED');
          console.error('Failed to send email:', error);
        }
      );

    // Clear the form fields after sending the email
    form.current.reset();
  };

  const handleContactMethodChange = (e) => {
    setContactMethod(e.target.value);
    setContactLink('');
  };

  const renderContactLinkInput = () => {
    if (contactMethod === 'telegram') {
      return (
        <input
          type="text"
          name="contactLink"
          placeholder="Telegram Username"
          value={contactLink}
          onChange={(e) => setContactLink(e.target.value)}
        />
      );
    } else if (contactMethod === 'instagram') {
      return (
        <input
          type="text"
          name="contactLink"
          placeholder="Instagram Username"
          value={contactLink}
          onChange={(e) => setContactLink(e.target.value)}
        />
      );
    } else if (contactMethod === 'other') {
      return (
        <input
          type="text"
          name="contactLink"
          placeholder="Other Contact Link"
          value={contactLink}
          onChange={(e) => setContactLink(e.target.value)}
        />
      );
    }
    return null;
  };

  return (
    <div>
      {status !== 'SUCCESS' ? (
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h4>Connect Colloborate Create</h4>
          <label>Subject</label>
          <input type="text" name="subject" />
          <label>Name</label>
          <input type="text" name="name" />
          <label>Profession</label>
          <input type="text" name="profession" />
          <label>Message</label>
          <textarea name="message" />
          <label>Phone Number</label>
          <input type="text" name="phone" />
          <label>Contact Method</label>
          <select
            name="contactMethod"
            value={contactMethod}
            onChange={handleContactMethodChange}
          >
            <option value="">Select Contact Method</option>
            <option value="telegram">Telegram</option>
            <option value="instagram">Instagram</option>
            <option value="other">Other</option>
          </select>
          {renderContactLinkInput()}
          <label>To (Recipient's Email)</label>
          <input type="email" name="recipientEmail" defaultValue={userEmail} />
          <input type="submit" value="Send" />
        </form>
      ) : null}
    </div>
  );
};

export default ContactForm;
