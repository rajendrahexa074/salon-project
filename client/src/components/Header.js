import React from 'react';
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { logOut } from '../store/slice/AuthSlice';
import { useNavigate } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutAction = () => {
    dispatch(logOut());
    navigate("/login");
  }

  return (
    <div className="header enhanced-header">
      <h1 className="shadow-heading portal-title">
        <FontAwesomeIcon icon={faUserShield} /> Admin Panel
      </h1>
      <div className="user-menu">
        <span>👋 Welcome, <strong>Admin</strong></span>
        <button className="logout-button" onClick={()=> logoutAction()}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </button>
      </div>
    </div>
  );

}

export default Header;
