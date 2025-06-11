import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wkjrqf8',
        'template_mywh4ve',
        formRef.current,
        'bepz3yEzpS2bn_w8C'
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          formRef.current.reset();
        },
        () => {
          setStatus('Failed to send message. Try again later.');
        }
      );
  };

  return (
    <div className="container mt-4">
      <h2>Contact Us</h2>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="mb-3">
          <label>Name</label>
          <input name="user_name" type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input name="user_email" type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea name="message" className="form-control" rows="5" required />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
        {status && <p className="mt-3">{status}</p>}
      </form>
    </div>
  );
}

export default ContactUs;
