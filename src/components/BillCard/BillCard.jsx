import React, { useState } from "react";
import styles from "./BillCard.module.css";
import TextField from "../../ui/TextField/TextField";

const BillCard = () => {
  const [formHide, setFormHide] = useState(true);
  const [amount, setAmount] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [remark, setRemark] = useState("");

  const fixedRateHandler = () => setFormHide(false);

  const onInputChange = (event) => {
    const value = event.target.value;
    event.target.name === "amount"
      ? setAmount(value)
      : event.target.name === "mobile"
      ? setMobileNumber(value)
      : setName(value);
  };
  return (
    <>
      <div className={styles.billCard}>
        <div className={styles.body}>
          <h2 style={{ marginBottom: "10px" }}>Place your Load Bid</h2>
          <div className={styles.hr_line}></div>
        </div>
        <div className={styles.amountDiv}>
          <TextField
            placeHolder="0"
            name="amount"
            type="number"
            className={styles.amountInput}
            value={amount}
            onInputChange={onInputChange}
          />
        </div>
        <div>
          <button
            className={styles.billCardBtn}
            disabled={amount === "" ? true : false}
            onClick={fixedRateHandler}
          >
            Fixed Rate{" "}
          </button>
          <button className={styles.billCardBtn} disabled>
            Rate Negotiable
          </button>
        </div>
        <form hidden={formHide}>
          <hr />
          <div style={{ margin: "30px 0" }}>
            <div className={styles.floatingLabel}>
              <TextField
                placeHolder=" "
                name="mobile"
                type="number"
                className={styles.floatingInput}
                value={mobileNumber}
                onInputChange={onInputChange}
              />
              <span className={styles.highlight}></span>
              <label>Enter your mobile number</label>
            </div>
            <div className={styles.floatingLabel}>
              <TextField
                placeHolder=" "
                name="name"
                type="text"
                className={styles.floatingInput}
                value={name}
                onInputChange={onInputChange}
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
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
              />
              <span className={styles.highlight}></span>
              <label>Enter Remark (Optional)</label>
            </div>
          </div>
        </form>
      </div>

      <button
        disabled={
          mobileNumber !== "" && name !== "" && remark !== "" ? false : true
        }
        className={styles.bidBtn}
      >
        Bid Now
      </button>
    </>
  );
};

export default BillCard;
