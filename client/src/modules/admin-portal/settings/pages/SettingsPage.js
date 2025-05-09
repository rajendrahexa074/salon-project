import React from 'react';
import ProfileSettings from './ProfileSettings.js';
import BookingSettings from './BookingSettings.js';
import ContactSettings from './ContactSettings.js';
import '../../../../css/Setting.css'

const SettingPage = () => {
  return (
    <div className="setting-container-box">
      <h2 className=" gradient-heading" >Salon Settings</h2>

      {/* Profile Settings Section */}
      <ProfileSettings />


      {/* Booking Settings Section */}
      <BookingSettings />

      {/* Contact Settings Section */}
      <ContactSettings />
    </div>
  );
};

export default SettingPage;
