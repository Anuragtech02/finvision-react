import React from "react";
import styles from "./App.module.scss";
import Button from "./components/Button/Button";
import InputField from "./components/InputField/InputField";

const App = () => {
  return (
    <div className={styles.container}>
      <Button variant="solid">Upload</Button>
      <InputField
        type="name"
        fieldName="Picklu"
        placeholder="Ex- 1,00,000"
        required
      ></InputField>
      <div className={styles.gradientRight}></div>
    </div>
  );
};

export default App;
