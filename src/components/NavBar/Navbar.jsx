import React from "react";
import styles from "./Navbar.module.css";
import Hamburger from "../../assets/hamburger.png";
import HondaLogo from "../../assets/HondoLogo.png";
import Profilelogo from "../../assets/ProfileTop.png";

const Navbar = () => {
  return (
    <>
      <div className={styles.header}>
        <img src={Hamburger} alt="Hamburger"  />
        <img src={HondaLogo} alt="Honda-logo" className={styles.hondaLogo} />
        <img src={Profilelogo} alt="Profile-logo" className={styles.profileLogo} />
      </div>
    </>
  );
};

export default Navbar;
