import React from "react";
import styles from "./App.module.scss";
import Button from "./components/Button/Button";
import rightGradient from "./assets/gradients/right-gradient.svg";
import leftGradient from "./assets/gradients/left-gradient.svg";

const App = () => {
  return (
    <div className={styles.container}>
      <Button variant="solid">Upload</Button>
      <div className={styles.gradientRight}>
        <img src={rightGradient} alt="finvision-gradient" />
      </div>
      <div className={styles.gradientLeft}>
        <img src={leftGradient} alt="finvision-gradient" />
      </div>
    </div>
  );
};

export default App;
