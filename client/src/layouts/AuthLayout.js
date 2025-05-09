import React from 'react';
import { Outlet } from 'react-router-dom';
import '../css/AuthLayout.css';

function AuthLayout() {
  return (
    <div className="auth-layout">
      <div className="auth-box">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
