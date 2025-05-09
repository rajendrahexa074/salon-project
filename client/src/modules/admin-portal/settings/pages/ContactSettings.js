import React, { useState } from 'react';

const ContactSettings = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSaveContact = () => {
    alert('Contact settings saved!');
  };

  return (
    <section className="settings-section">
      <h3 className="section-title">Contact Settings</h3>

      <div className="input-container">
        <label>Phone Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input-field"
          placeholder="Enter Salon Phone Number"
        />
      </div>

      <div className="input-container">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          placeholder="Enter Salon Email"
        />
      </div>

      <div className="input-container">
        <label>Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="input-field"
          placeholder="Enter Salon Address"
          rows="4"
        />
      </div>

      <button onClick={handleSaveContact} className="save-button">
        Save Contact Settings
      </button>
    </section>
  );
};

export default ContactSettings;
