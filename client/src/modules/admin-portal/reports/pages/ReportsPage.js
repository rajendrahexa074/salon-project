import React from 'react';
import '../../../../css/ReportsPage.css';

const ReportsPage = () => {
  const summary = {
    totalAppointments: 128,
    completed: 110,
    cancelled: 18,
    revenue: 24500,
    topServices: [
      { name: 'Haircut', count: 45 },
      { name: 'Facial', count: 30 },
      { name: 'Hair Color', count: 20 },
    ],
    staffPerformance: [
      { name: 'Alice', appointments: 40 },
      { name: 'Bob', appointments: 35 },
      { name: 'Eve', appointments: 25 },
    ],
  };

  return (
    <div className="salon-reports">
      <h2 className='gradient-heading'>Salon Reports</h2>

      <div className="report-cards">
        <div className="report-card">
          <h4>Total Appointments</h4>
          <p>{summary.totalAppointments}</p>
        </div>
        <div className="report-card">
          <h4>Completed</h4>
          <p>{summary.completed}</p>
        </div>
        <div className="report-card">
          <h4>Cancelled</h4>
          <p>{summary.cancelled}</p>
        </div>
        <div className="report-card">
          <h4>Total Revenue</h4>
          <p>${summary.revenue.toLocaleString()}</p>
        </div>
      </div>

      <div className="details-section">
        <div className="report-box">
          <h4>Top Services</h4>
          <ul>
            {summary.topServices.map((service, index) => (
              <li key={index}>{service.name} - {service.count} times</li>
            ))}
          </ul>
        </div>

        <div className="report-box">
          <h4>Staff Performance</h4>
          <ul>
            {summary.staffPerformance.map((staff, index) => (
              <li key={index}>{staff.name} - {staff.appointments} appointments</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
