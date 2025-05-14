import React, { useState } from 'react';
import '../../../../css/BookAppointment.css';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment Booked Successfully!');
    // You can integrate API logic here
  };

  return (
    <div className="form-container">
      <h2>Book Your Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Service</label>
          <select
            name="service"
            className="form-select"
            required
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a Service</option>
            <option value="Haircut">Haircut</option>
            <option value="Facial">Facial</option>
            <option value="Hair Color">Hair Color</option>
            <option value="Manicure">Manicure</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            name="date"
            className="form-control"
            required
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Time</label>
          <input
            type="time"
            name="time"
            className="form-control"
            required
            value={formData.time}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Additional Notes</label>
          <textarea
            name="notes"
            className="form-control"
            rows="3"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
