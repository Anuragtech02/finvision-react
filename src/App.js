import React from "react";
import styles from "./App.module.scss";
import rightGradient from "./assets/gradients/right-gradient.svg";
import leftGradient from "./assets/gradients/left-gradient.svg";
import Navbar from "./components/Navbar/Navbar";
import InputField from "./components/InputField/InputField";
import Cursor from "./components/Cursor/Cursor";
import Home from "./components/Pages/Home/Home";

const App = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Navbar />
        <Home></Home>
        <div className={styles.gradientRight}>
          <img src={rightGradient} alt="finvision-gradient" />
        </div>
        <div className={styles.gradientLeft}>
          <img src={leftGradient} alt="finvision-gradient" />
        </div>
      </div>
      <div className={styles.gradientLeft}>
        <img src={leftGradient} alt="finvision-gradient" />
      </div>
    </React.Fragment>
  );
};

export default App;
