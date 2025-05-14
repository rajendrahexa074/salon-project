import React from 'react';

const CustomerFooter = () => {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} Customer Services
    </footer>
  );
};

const styles = {
  footer: {
    background: '#2c3e50',
    color: '#fff',
    textAlign: 'center',
    padding: '0.75rem'
  }
};

export default CustomerFooter;
