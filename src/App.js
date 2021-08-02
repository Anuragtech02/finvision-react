import React from "react";
import styles from "./App.module.scss";
import rightGradient from "./assets/gradients/right-gradient.svg";
import leftGradient from "./assets/gradients/left-gradient.svg";
import Navbar from "./components/Navbar/Navbar";
import Cursor from "./components/Cursor/Cursor";

const App = () => {
  return (
    <>
      <Cursor />
      <div className={styles.container}>
        <Navbar />
        <div className={styles.gradientRight}>
          <img src={rightGradient} alt="finvision-gradient" />
        </div>
        <div className={styles.gradientLeft}>
          <img src={leftGradient} alt="finvision-gradient" />
        </div>
      </div>
    </>
  );
};

export default App;
