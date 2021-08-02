import React from "react";
import styles from "./InputField.module.scss";

const InputField = ({ label: fieldName, type, props, placeholder }) => {
  return (
    <div className={styles.container}>
      <label className={styles.inputLabel} htmlFor={fieldName}>
        {fieldName}
      </label>
      <input
        id={fieldName}
        placeholder={placeholder}
        className={styles.inputField}
        type={type}
        {...props}
      ></input>
    </div>
  );
};

export default InputField;
