import React from "react";
import styles from "./App.module.scss";
import Button from "./components/Button/Button";

const App = () => {
  return (
    <div className={styles.container}>
      <Button variant="solid">Upload</Button>
      <div className={styles.gradientRight}></div>
    </div>
  );
};

export default App;
