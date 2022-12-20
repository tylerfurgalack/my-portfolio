import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  // Use a state variable to store the email address
  const [email, setEmail] = useState('');

  // Validate the email address using a regular expression
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const isEmailValid = emailRegex.test(email);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isEmailValid) {
      // The email address is not valid, show an error message
      alert('Please enter a valid email address');
      return;
    }

    // The email address is valid, send it to your server or email address
    // (You will need to implement this part yourself)
  };

  return (
    <div className="contact">
      <h3>Contact Me</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
