import React, { useState, useEffect, useRef, useContext } from "react";
import styles from "./Learn.module.scss";
import { Button } from "../../components";
import { ArrowRight } from "react-feather";
import { motion } from "framer-motion";
import { withRouter, useParams } from "react-router";
import { GlobalContext } from "../../utils/contexts/GlobalContext";

const data = [
  "Hey, this is Finvison",
  "We provide users with the idea to outsmart their financial investing making their personal portfolio strong.",
  "So, are you ready to invest?",
  "Let's look at it through the lens of a game in which we give you a certain amount of money and allow you to invest without the fear of losing it.",
];

const numberFormat = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);

const Learn = ({ history }) => {
  return (
    <div className={styles.container}>
      <LearnIntro history={history} />
    </div>
  );
};

export default withRouter(Learn);

const LearnIntro = ({ history }) => {
  const [active, setActive] = useState(false);
  const [amount, setAmount] = useState(100000);

  const { id } = useParams();
  const container = useRef(null);

  const { setInitialAmount } = useContext(GlobalContext);

  const onClickNext = () => {
    console.log({ id });
    if (parseInt(id) === 3) {
      localStorage.setItem(
        "finvision",
        JSON.stringify({
          createdAt: new Date(),
          modifiedAt: new Date(),
          initialAmount: amount,
        })
      );
      setInitialAmount(amount);
      history.push(`/learn/chapter/${1}`);
      return;
    }

    container.current.style.opacity = 0;
    setTimeout(() => {
      history.push(`/learn/${parseInt(id) + 1}`);
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
    <div className={styles.introContainer} ref={container}>
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
            className={styles.nextContainer}
          >
            {parseInt(id) === 3 && (
              <div className={styles.initialAmount}>
                <p>Initial Balance</p>
                <input
                  disabled
                  value={numberFormat(amount)}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            )}
            <br />
            <Button variant="outlined" onClick={onClickNext}>
              <span className={styles.flexRow}>
                {parseInt(id) === 3 ? (
                  <>
                    Let's Go &nbsp; <ArrowRight />
                  </>
                ) : (
                  <>
                    Next &nbsp; <ArrowRight />
                  </>
                )}
              </span>
            </Button>
          </motion.div>
        </>
      )}
    </div>
  );
};
