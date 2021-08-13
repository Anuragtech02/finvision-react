import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Chapter.module.scss";
import { useParams } from "react-router";
import { Grid } from "@material-ui/core";
import { GlobalContext } from "../../utils/contexts/GlobalContext";
import { Card, ChartAnimation } from "../../components";
import { investmentOptions } from "../../utils/constants";
import { motion } from "framer-motion";
import { withRouter } from "react-router";
import { calculateCompoundInterest } from "../../utils/formula";
import { Line } from "react-chartjs-2";

const numberFormat = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);

const Chapter = ({ history }) => {
  const [animActive, setAnimActive] = useState(false);
  const [graphActive, setGraphActive] = useState(false);
  const [calculatedData, setCalculatedData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [
      "Year 0",
      "Year 1",
      "Year 2",
      "Year 3",
      "Year 4",
      "Year 5",
      "Year 6",
      "Year 7",
      "Year 8",
      "Year 9",
      "Year 10",
    ],
    datasets: [
      {
        label: "Amount",
        data: calculatedData,
      },
    ],
  });

  const { selected, setSelected } = useState("");

  const { id, subId } = useParams();

  const { initialAmount, chapters, setChapters } = useContext(GlobalContext);

  const container = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    console.log({ chapters });
  }, [chapters]);

  const onClickCard = () => {
    container.current.style.opacity = 0;
    setTimeout(() => {
      container.current.style.display = "none";
      setAnimActive(true);
    }, 200);
    setTimeout(() => {
      setAnimActive(false);
      setGraphActive(true);
    }, 5000);
  };

  useEffect(() => {
    let total = 100000;
    const res = [100000];
    for (let i = 0; i < 10; i++) {
      let interest = calculateCompoundInterest(total, i + 1);
      res.push(interest + total);
    }
    setCalculatedData(res);
    setChartData((curr) => ({
      ...curr,
      datasets: [
        {
          label: "Amount",
          data: res,
          backgroundColor: "#3e1f8b33",
          borderColor: "white",
          fill: true,
          opacity: 0.6,
        },
      ],
    }));
    console.log({ total: parseFloat(total.toFixed(2)), res });
  }, [animActive]);

  const animData = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.4, ease: "easeOut" },
  };

  // const config = {
  //   type: "Line",
  //   data: data,
  //   options: {
  //     plugins: {
  //       filler: {
  //         propagate: false,
  //       },
  //       title: {
  //         display: true,
  //         text: (ctx) =>
  //           "drawTime: " + ctx.chart.options.plugins.filler.drawTime,
  //       },
  //     },
  //     pointBackgroundColor: "#fff",
  //     radius: 10,
  //     interaction: {
  //       intersect: false,
  //     },
  //   },
  // };

  return (
    <div className={styles.container}>
      <div ref={container}>
        <motion.div {...animData} className={styles.header}>
          <p>{chapters[id - 1]?.subChapters[subId]?.title}</p>
          <div className={styles.initialBalance}>
            <p>Current Balance</p>
            <h5>{numberFormat(initialAmount)}</h5>
          </div>
        </motion.div>
        <div className={styles.mainContainer}>
          <div className={styles.main}>
            <Grid container spacing={4}>
              {investmentOptions.map((option, i) => (
                <Grid
                  key={option.title}
                  item
                  xl={3}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <motion.div
                    {...animData}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: 0.2 * i,
                    }}
                  >
                    <Card
                      title={option.title}
                      risk={option.risk}
                      returnRate={option.return}
                      onClick={onClickCard}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </div>
          <div className={styles.progress}>
            {chapters?.map((chapter) => (
              <div key={chapter.title} className={styles.chapter}>
                <div className={styles.bulletTitle}>
                  <span
                    className={
                      chapter?.complete
                        ? styles.bulletComplete
                        : styles.bulletStarted
                    }
                  ></span>
                  <p>{chapter?.title}</p>
                </div>
                <div className={styles.subchapters}>
                  {chapter.subChapters.map((sub) => (
                    <div key={sub.title} className={styles.bulletTitle}>
                      <span
                        className={
                          sub?.complete
                            ? styles.bulletComplete
                            : styles.bulletStarted
                        }
                      ></span>
                      <p>{sub?.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {animActive && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={styles.chartAnimation}
        >
          <ChartAnimation />

          <p>Please wait while we calculate stuff for you...</p>
        </motion.div>
      )}
      {graphActive && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={styles.chartContainer}
        >
          <Line
            data={chartData}
            options={{
              maintainAspectRatio: true,
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default withRouter(Chapter);
