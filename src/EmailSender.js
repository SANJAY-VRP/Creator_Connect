// EmailSender.js
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './EmailSender.css';

const ContactUs = ({ recipientEmail, onEmailSent,onCancel }) => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const {
      user_name,
      user_email,
      company_name,
      user_role,
      whatsapp,
      company_email,
      to_email,
      message
    } = e.target.elements;

    const templateParams = {
      to_name: 'Recipient Name',
      from_name: user_name.value,
      from_email: 'sanjayperiyar122@gmail.com',
      reply_to: user_email.value,
      company_name: company_name.value,
      user_role: user_role.value,
      whatsapp: whatsapp.value,
      company_email: company_email.value,
      to_email: recipientEmail, // Use recipientEmail directly
      message: message.value
    };

    emailjs.send('service_bba9iic', 'template_9uyylpr', templateParams, 'y_j3t0yvYV-joj7Sy')
      .then(
        (response) => {
          setStatus('SUCCESS');
          console.log('Email sent successfully:', response);
          onEmailSent();
        },
        (error) => {
          setStatus('FAILED');
          console.error('Failed to send email:', error);
        }
      );

    form.current.reset();
  };

  return (
    <div>
      {status !== 'SUCCESS' && (
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Company Name</label>
          <input type="text" name="company_name" />
          <label>Role</label>
          <input type="text" name="user_role" />
          <label>WhatsApp</label>
          <input type="text" name="whatsapp" />
          <label>Company Email</label>
          <input type="email" name="company_email" />
          <label>To (Recipient's Email)</label>
          <input type="email" defaultValue={recipientEmail} name="to_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
          <button onClick={onCancel}>Cancel</button> {/* Add cancel button */}
        </form>
      )}
      {status && status === 'SUCCESS' && <p>Email sent successfully!</p>}
      {status && status === 'FAILED' && <p>Failed to send email. Please try again later.</p>}
    </div>
  );
};

export default ContactUs;
