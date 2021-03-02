import React from "react";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <>
      <div className={styles.body}>
        <h2 style={{ marginBottom: "10px" }}>Old Car Available</h2>
        <div className={styles.hr_line}></div>
      </div>
    </>
  );
};

export default Main;
