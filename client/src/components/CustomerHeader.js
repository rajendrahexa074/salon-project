import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../store/slice/AuthSlice';
const CustomerHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/login');
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h2 className='gradient-heading' style={{ margin: 0 }}>💇‍♀️ Glamour Salon</h2>
      </div>

      <nav style={styles.nav}>
        <Link to="/customer/home" style={styles.link}>Home</Link>
        <Link to="/customer/about-us" style={styles.link}>About</Link>
      </nav>

      <div style={styles.userArea}>
        {isAuthenticated ? (
          <>
            <span style={styles.welcome}>Hi, {user?.name || 'Customer'}</span>
            <button style={styles.button} onClick={()=> handleLogout()}>Logout</button>
          </>
        ) : (
          <Link to="/login" style={{ ...styles.link, ...styles.loginLink }}>Login</Link>
        )}
      </div>
    </header>
  );
};

const styles = {
  header: {
    background: '#2c3e50',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  logo: {
    flex: 1
  },
  nav: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
  loginLink: {
    fontWeight: 'bold'
  },
  userArea: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '1rem'
  },
  welcome: {
    fontSize: '0.95rem',
    fontStyle: 'italic'
  },
  button: {
    padding: '0.4rem 0.8rem',
    backgroundColor: '#e74c3c',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.9rem'
  }
};

export default CustomerHeader;
