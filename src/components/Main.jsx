import React from "react";
import styles from "./main.module.css";
const Main = () => {
  return (
    <div className={styles.container}>
      <h1>Chat with me</h1>
      <ul></ul>
      <div className={styles.bottomSection}>
        <div className={styles.inputContainer}>
          <input type="text" />
          <div className={styles.submit} id="submit">
            ➢
          </div>
        </div>
        <p className={styles.info}>powered by GPT turbo 3.5</p>
      </div>
    </div>
  );
};

export default Main;
