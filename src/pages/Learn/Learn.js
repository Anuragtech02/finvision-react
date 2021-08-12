import React, { useState } from "react";
import styles from "./Learn.module.scss";
import { Button } from "../../components";
import { ArrowRight } from "react-feather";

const data = [
  "Hey, this is Finvison",
  "We provide users with the idea to outsmart their financial investing making their personal portfolio strong.",
  "So, are you ready to invest?",
  "Let's look at it through the lens of a game in which we give you a certain amount of money and allow you to invest without the fear of losing it.",
];

const Learn = () => {
  const [current, setCurrent] = useState(0);

  const onClickNext = () => {
    setCurrent((curr) => (curr + 1) % 4);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainText}>
        <h1>{data[current]}</h1>
      </div>
      <br />
      <br />
      <Button variant="outlined" onClick={onClickNext}>
        <span className={styles.flexRow}>
          Next &nbsp; <ArrowRight />
        </span>
      </Button>
    </div>
  );
};

export default Learn;
