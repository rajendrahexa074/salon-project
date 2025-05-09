import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Salon App</h2>
      <ul className="nav-list">
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/services">Services</Link></li>
        <li><Link to="/admin/customers">Customers</Link></li>
        <li><Link to="/admin/appointments">Appointments</Link></li>
        <li><Link to="/admin/staff">Staff</Link></li>
        <li><Link to="/admin/settings">Settings</Link></li>
        <li><Link to="/admin/reports">Reports</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
