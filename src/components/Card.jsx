import React, { useState } from "react";
import styles from "./Card.module.css";
import Grouplogo from "./assests/Group 15945.svg";
import Pathlogo from "./assests/Path 25988.svg";
import Paymentlogo from "./assests/payment.svg";
import Profilepic from "./assests/Profile.png";
import MoreLogo from "./assests/More.svg";
const Card = () => {
  const [toggle, HandleToggle] = useState(false);
  console.log(toggle);
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 style={{ margin: "0px 0px 5px 0px" }}>Honda City</h3>
        <p style={{ margin: "0px", color: "#8492A6" }}>
          Posted At 1 Nov, 9:30 AM
        </p>
      </div>
      <div>
        <div className={styles.cardBody}>
          <div className={styles.content}>
            <span className={styles.logo}>
              <img src={Grouplogo} alt="logo" />
            </span>
            <span style={{ fontWeight: "600" }}>Specification 1</span>
          </div>
          <div className={styles.content}>
            <span className={styles.logo}>
              <img src={Pathlogo} alt="logo" />
            </span>
            <div style={{ fontWeight: "600" }}>Specification 2</div>
          </div>
          <div className={styles.content}>
            <span className={styles.logo}>
              <img src={Paymentlogo} alt="logo" />
            </span>
            <div style={{ fontWeight: "600" }}>Specification 3</div>
          </div>
        </div>
        <p className={styles.paraStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <p style={{ color: "blue" }} onClick={() => HandleToggle(!toggle)}>
            {toggle ? "Hide Details" : "More Details"}{" "}
            <span>
              <img src={MoreLogo} alt="logo" />
            </span>
          </p>
        </div>
        <div>
          {toggle
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p"
            : ""}
        </div>
        <div className={styles.profile}>
          <div className={styles.profile_image}>
            {" "}
            <img src={Profilepic} alt="logo" />
          </div>
          <div className={styles.profile_content}>
            <div className={styles.heading}>Rohan Sharma</div>
            <div className={styles.subHeading}>Bengaluru, Karnataka</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
