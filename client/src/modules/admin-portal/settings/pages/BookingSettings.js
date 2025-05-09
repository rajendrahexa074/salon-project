import React, { useState } from 'react';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const BookingSettings = () => {
  const [workingHours, setWorkingHours] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = { start: '', end: '' };
      return acc;
    }, {})
  );

  const [holidays, setHolidays] = useState([]);

  const handleTimeChange = (day, field, value) => {
    setWorkingHours((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value }
    }));
  };

  const handleAddHoliday = () => {
    setHolidays([...holidays, { name: '', date: '' }]);
  };

  const handleHolidayChange = (index, field, value) => {
    const updated = [...holidays];
    updated[index][field] = value;
    setHolidays(updated);
  };

  return (
    <section className="settings-section">
      <h3 className="section-title">Booking Settings</h3>

      <div className="work-hours-container">
        <h4 className="sub-title">Working Hours</h4>
        {daysOfWeek.map((day) => (
          <div className="day-row" key={day}>
            <label>{day}</label>
            <input
              type="time"
              value={workingHours[day].start}
              onChange={(e) => handleTimeChange(day, 'start', e.target.value)}
            />
            <span>to</span>
            <input
              type="time"
              value={workingHours[day].end}
              onChange={(e) => handleTimeChange(day, 'end', e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="holidays-container">
        <h4 className="sub-title">Holidays</h4>
        <button onClick={handleAddHoliday} className="add-holiday-button">Add Holiday</button>
        {holidays.map((holiday, index) => (
          <div className="holiday-item" key={index}>
            <input
              type="text"
              placeholder="Holiday name"
              value={holiday.name}
              onChange={(e) => handleHolidayChange(index, 'name', e.target.value)}
            />
            <input
              type="date"
              value={holiday.date}
              onChange={(e) => handleHolidayChange(index, 'date', e.target.value)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookingSettings;
