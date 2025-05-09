import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';

import LoginPage from '../modules/auth/pages/LoginPage';

import AdminDashboard from '../modules/admin-portal/dashboard/pages/AdminDashboard';
import ServicesPage from '../modules/admin-portal/services/pages/ServicesPage';
import CustomersPage from '../modules/admin-portal/customers/pages/CustomersPage';
import AppointmentsPage from '../modules/admin-portal/appointments/pages/AppointmentsPage';
import StaffPage from '../modules/admin-portal/staff/pages/StaffPage';
import SettingsPage from '../modules/admin-portal/settings/pages/SettingsPage';
import ReportsPage from '../modules/admin-portal/reports/pages/ReportsPage';
import Signup from '../modules/auth/pages/Signup';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/services" element={<ServicesPage />} />
          <Route path="/admin/customers" element={<CustomersPage />} />
          <Route path="/admin/appointments" element={<AppointmentsPage />} />
          <Route path="/admin/staff" element={<StaffPage />} />
          <Route path="/admin/settings" element={<SettingsPage />} />
          <Route path="/admin/reports" element={<ReportsPage />} />
        </Route>
      </Routes>


      
    </Router>
  );
}

export default AppRoutes;
