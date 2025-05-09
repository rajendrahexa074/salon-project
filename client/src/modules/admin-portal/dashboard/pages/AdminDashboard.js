import React from 'react';
import '../../../../css/DashboardPage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUserTie, faUsers } from '@fortawesome/free-solid-svg-icons';

function AdminDashboard() {
  const metrics = [
    { title: 'Total Appointments', value: 12, icon: faCalendar, color: '#4e73df' },
    { title: 'Total Staff', value: 5, icon: faUserTie, color: '#1cc88a' },
    { title: 'Customers Today', value: 18, icon: faUsers, color: '#36b9cc' },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title gradient-heading">Welcome to Admin Dashboard</h2>
      <div className="dashboard-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="dashboard-card" style={{ backgroundColor: metric.color }}>
            <FontAwesomeIcon icon={metric.icon} size="2x" />
            <h3>{metric.title}</h3>
            <p>{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default AdminDashboard;
