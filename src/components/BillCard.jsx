import React from "react";
import styles from "./BillCard.module.css";
import Rupeepic from "./assests/rupeelogo.jpg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const BillCard = () => {
  return (
    <div className={styles.billCard}>
      <div className={styles.body}>
        <h2 style={{ marginBottom: "10px" }}>Place your Load Bid</h2>
        <div className={styles.hr_line}></div>
      </div>
      <div>
        <h1>
          <span>
            <img
              style={{ width: "14px", margin: "20px 10px 0px 10px" }}
              src={Rupeepic}
              alt="logo"
            />
          </span>
          <TextField required id="standard-required" label="Enter Amount" />
        </h1>
      </div>
      <div className={styles.buttons}>
        <button>Fixed Rate</button>
        <button
          style={{
            backgroundColor: "white",
            color: "gray",
            border: "1px solid gray",
          }}
        >
          Rate Negotiable
        </button>
        <hr></hr>
        <div>
          <TextField
            required
            id="standard-required"
            label="Enter Your Phone Number"
            style={{ marginBottom: "30px" }}
          />
        </div>
        <div>
          <TextField
            required
            id="standard-required"
            label="Enter Your Name"
            style={{ marginBottom: "30px" }}
          />
        </div>
        <div>
          <TextField
            required
            id="standard-required"
            label="Enter Remark"
            style={{ marginBottom: "30px" }}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          href="#"
          size="large"
          style={{ width: "50%" }}
        >
          Bid Now
        </Button>
      </div>
    </div>
  );
};

export default BillCard;
