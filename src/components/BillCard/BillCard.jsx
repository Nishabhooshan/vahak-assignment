import React, { useState } from "react";
import styles from "./BillCard.module.css";
import Rupeepic from "../../assets/rupeelogo.jpg"; 

const BillCard = () => {
  const [amount, setAmount] = useState("");
  const [formHide, setFormHide] = useState(true);
  const enterAmounthandler = (event) => {
    console.log("enterAmounthandler", event.target.value);
    setAmount(event.target.value);
  };
  const fixedRateHandler = () => {
    setFormHide(false);
  };
  return (
    <>
    <div className={styles.billCard}>
      <div className={styles.body}>
        <h2 style={{ marginBottom: "10px" }}>Place your Load Bid</h2>
        <div className={styles.hr_line}></div>
      </div>
      <div className={styles.amountDiv}> 
            <img
              style={{ width: "14px", height: "23px" }}
              src={Rupeepic}
              alt="logo"
            />
          
          <input className={styles.amountInput}
            required
            id="standard-required"
            placeholder="0"
            type="number"
            value={amount}
            onChange={enterAmounthandler}
          />
     
      </div>
      <div className={styles.buttons}>
        <button className={styles.billCardBtn}
          disabled={amount === "" ? true : false}
          onClick={fixedRateHandler}
        >
          Fixed Rate
        </button>
        <button className={styles.billCardBtn} disabled>Rate Negotiable</button>
        <form hidden={formHide}>
          <div style={{  margin: "30px 0" }}>
            <div className={styles.floatingLabel}>
              <input
                className={styles.floatingInput}
                type="number"
                placeholder=" "
              />
              <span className={styles.highlight}></span>
              <label>Enter your mobile number</label>
            </div>
            <div className={styles.floatingLabel}>
              <input
                className={styles.floatingInput}
                type="text"
                placeholder=" "
              />
              <span className={styles.highlight}></span>
              <label>Enter your Name</label>
            </div>
            <div className={styles.floatingLabel}>
              <textarea
                className={styles.floatingInput}
                type="text-area"
                placeholder=" "
                rows="4"
                
              />
              <span className={styles.highlight}></span>
              <label>Enter Remark</label>
            </div>
          </div>
         
        </form>
      
      </div>
    </div>
    
      <button className={styles.bidBtn}>Bid Now</button>
    </>
  );
};

export default BillCard;
