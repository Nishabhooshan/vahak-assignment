import React from 'react';
import styles from './Navbar.module.css';
import logo from './assests/hamburger.png'
import HondaLogo from './assests/Hondo Logo.png'
import Profilelogo from './assests/Profile Top.png'

const Navbar = () => {
  return (
    <>
      <div className={styles.header}>
        <div>
          <img src={logo} alt="logo"/>
        </div>
        <div> <img src={HondaLogo} alt="logo"/></div>
        <div> <img src={ Profilelogo} alt="logo"/></div>
      </div>
    </>
  )
}

export default Navbar
