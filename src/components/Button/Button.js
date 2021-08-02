import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

const getClassBasedOnProps = (variant) => {
  switch (variant) {
    case "solid":
      return styles.default;
    case "outlined":
      return styles.btnOutline;
    default:
      return styles.default;
  }
};

const Button = ({ children, type, variant, onClick, props }) => {
  return (
    <button
      className={clsx(styles.styledBtn, getClassBasedOnProps(variant))}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
