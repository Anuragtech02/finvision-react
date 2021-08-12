import React, { useState, useEffect, useRef } from "react";
import styles from "./Learn.module.scss";
import { Button } from "../../components";
import { ArrowRight } from "react-feather";
import { motion } from "framer-motion";
import { withRouter, useParams } from "react-router";

const data = [
  "Hey, this is Finvison",
  "We provide users with the idea to outsmart their financial investing making their personal portfolio strong.",
  "So, are you ready to invest?",
  "Let's look at it through the lens of a game in which we give you a certain amount of money and allow you to invest without the fear of losing it.",
];

const Learn = ({ history }) => {
  const [active, setActive] = useState(false);

  const { id } = useParams();
  const container = useRef(null);

  const onClickNext = () => {
    container.current.style.opacity = 0;
    setTimeout(() => {
      history.push(`/learn/${(parseInt(id) + 1) % 4}`);
    }, 100);
  };

  useEffect(() => {
    container.current.style.opacity = 1;
    setActive(false);
    setTimeout(() => {
      setActive(true);
    }, 2);
  }, [id]);

  return (
    <div className={styles.container} ref={container}>
      {active && (
        <>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={styles.mainText}
          >
            <h1>{data[id]}</h1>
          </motion.div>
          <br />
          <br />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Button variant="outlined" onClick={onClickNext}>
              <span className={styles.flexRow}>
                Next &nbsp; <ArrowRight />
              </span>
            </Button>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default withRouter(Learn);
