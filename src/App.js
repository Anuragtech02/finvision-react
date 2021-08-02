import React from "react";
import styles from "./App.module.scss";
import rightGradient from "./assets/gradients/right-gradient.svg";
import leftGradient from "./assets/gradients/left-gradient.svg";
import Navbar from "./components/Navbar/Navbar";
import InputField from "./components/InputField/InputField";

const App = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.gradientRight}>
        <img src={rightGradient} alt="finvision-gradient" />
      </div>
      <div className={styles.gradientLeft}>
        <img src={leftGradient} alt="finvision-gradient" />
      </div>
      <InputField
        type="name"
        fieldName="Picklu"
        placeholder="Ex: 10,00,000"
      ></InputField>
    </div>
  );
};

export default App;
