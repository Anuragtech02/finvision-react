import React, { useState, useEffect } from "react";
import styles from "./Cursor.module.scss";
import cursorImage from "../../assets/cursor.svg";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX - 70, y: e.clientY - 70 });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      className={styles.cursor}
    >
      <img src={cursorImage} alt="finvision-cursor" />
    </div>
  );
};

export default Cursor;
