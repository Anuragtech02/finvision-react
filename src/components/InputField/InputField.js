import React from "react";
import styles from "./InputField.module.scss";

const InputField = ({
  label: fieldName,
  variant,
  type,
  value,
  onChange,
  props,
  placeholder,
  required,
}) => {
  switch (variant) {
    case "normal": {
      return (
        <div className={styles.container}>
          <label className={styles.inputLabel} htmlFor={fieldName}>
            {fieldName}
          </label>
          <input
            required={required}
            value={value}
            onChange={onChange}
            id={fieldName}
            placeholder={placeholder}
            className={styles.inputField}
            type={type}
            {...props}
          ></input>
        </div>
      );
    }
    case "large": {
      return (
        <div className={styles.container}>
          <label className={styles.inputLabel} htmlFor={fieldName}>
            {fieldName}
          </label>
          <textarea
            cols="30"
            rows="10"
            required={required}
            value={value}
            onChange={onChange}
            id={fieldName}
            placeholder={placeholder}
            className={styles.inputField}
            type={type}
            {...props}
          ></textarea>
        </div>
      );
    }
    default: {
      return <p>Invalid Variant Type</p>;
    }
  }
};

export default InputField;
