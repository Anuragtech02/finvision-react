import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <h4>finvision</h4>
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/learn">Learn</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.burgerContainer}>
        <div className={styles.burger}></div>
        <div className={styles.burger}></div>
        <div className={styles.burger}></div>
      </div>
    </nav>
  );
};

export default Navbar;
