import React from "react";
import styles from "./InputField.module.scss";

const InputField = ({ children, type, required }) => {
  return <input className={styles.container} type={type}></input>;
};

export default InputField;
