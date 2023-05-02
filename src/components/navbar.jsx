import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>Home</button>
      <ul className={styles.history}>
        <li>About</li>
      </ul>
      <h5 className={styles.contact}> Contact</h5>
    </div>
  );
};

export default Navbar;
