import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <h1 style={styles.logoText}>HealthNet</h1>
      </div>
      <ul style={styles.navLinks}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#services" style={styles.link}>Services</a></li>
        <li><a href="#doctors" style={styles.link}>Doctors</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
      <div style={styles.emergencyButtonWrapper}>
        <button style={styles.emergencyBtn}>Emergency</button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px', // Increased padding for better spacing
    backgroundColor: 'transparent', // Transparent background to match scrolling video
    color: '#fff',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 10, // Keeps the navbar on top of the video
  },
  
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    fontSize: '1.5rem',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '90px', // Increased gap between nav items
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  emergencyButtonWrapper: {
    display: 'flex',
    alignItems: 'center', // Ensures the button is vertically centered
  },
  emergencyBtn: {
    padding: '8px 20px', // Increased padding for the button
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
};

export default Navbar;
