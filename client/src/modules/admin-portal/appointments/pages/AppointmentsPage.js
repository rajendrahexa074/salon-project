import React,{useState} from 'react';
import '../../../../css/AppointmentPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClock, faTimes } from '@fortawesome/free-solid-svg-icons';

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, name: 'John Doe', date: '2025-05-10', time: '10:00 AM', status: 'Pending' },
    { id: 2, name: 'Jane Smith', date: '2025-05-11', time: '02:30 PM', status: 'Pending' },
  ]);

  const updateStatus = (id, newStatus) => {
    const updated = appointments.map(appt =>
      appt.id === id ? { ...appt, status: newStatus } : appt
    );
    setAppointments(updated);
  };

  return (
    <div className="appointment-list-container">
      <h2 className='gradient-heading' >Appointment Requests</h2>
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date & Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appt => (
            <tr key={appt.id}>
              <td>{appt.name}</td>
              <td>{appt.date} - {appt.time}</td>
              <td className={`status ${appt.status.toLowerCase()}`}>{appt.status}</td>
              <td>
                <button className="action-btn approve" onClick={() => updateStatus(appt.id, 'Approved')}>
                  <FontAwesomeIcon icon={faCheck} /> Approve
                </button>
                <button className="action-btn reschedule" onClick={() => updateStatus(appt.id, 'Rescheduled')}>
                  <FontAwesomeIcon icon={faClock} /> Reschedule
                </button>
                <button className="action-btn cancel" onClick={() => updateStatus(appt.id, 'Cancelled')}>
                  <FontAwesomeIcon icon={faTimes} /> Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AppointmentsPage;


