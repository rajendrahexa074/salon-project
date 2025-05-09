import React, { useState } from 'react';

const ProfileSettings = () => {
  const [formData, setFormData] = useState({salonName:'Saloni Salon',
    salonDescription:'This function adds a new holiday (with a name and a date) to the holidays array by using setHolidays. The new holiday is added to the current list of holidays, which is done by spreading the current list and appending the new holiday object.'});

  const handleSubmit = () => {
    alert('Profile settings saved!');
  };

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  return (
    <form onSubmit={handleSubmit} >
    <section className="settings-section">
      <h3 className="section-title">Profile Settings</h3>
      <div className="input-container">
        <label>Salon Name</label>
        <input
          type="text"
          value={formData.salonName}
          onChange={(e) => handleChange(e)}
          className="input-field"
          placeholder="Enter Salon Name"
        />
      </div>

      <div className="input-container">
        <label>Salon Description</label>
        <textarea
          value={formData.salonDescription}
          onChange={(e) => handleChange(e)}
          className="input-field"
          placeholder="Describe your salon"
          rows="4"
        />
      </div>

      <button type='submit' className="save-button">
        Save Profile Settings
      </button>
    </section>
    </form>

  );
};

export default ProfileSettings;
