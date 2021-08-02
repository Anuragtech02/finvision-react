import React from "react";
import styles from "./InputField.module.scss";

const InputField = ({ fieldName, type, props, placeholder }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default InputField;
