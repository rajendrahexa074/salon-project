import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomerFooter from '../components/CustomerFooter';
import CustomerHeader from '../components/CustomerHeader';
const CustomerLayout = () => {
  return (
    <div style={styles.layoutWrapper}>
      <CustomerHeader />
      <main style={styles.main}>
        <Outlet />
      </main>
      <CustomerFooter />
    </div>
  );
};

const styles = {
  layoutWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    flex: 1,
    padding: '1rem',
    background: '#f9f9f9'
  }
};

export default CustomerLayout;
