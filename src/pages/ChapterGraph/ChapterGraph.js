import React, { useContext, useEffect } from "react";
import styles from "./ChapterGraph.module.scss";
import { withRouter, useParams } from "react-router-dom";
import { GlobalContext } from "../../utils/contexts/GlobalContext";
import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";
import { investmentOptions } from "../../utils/constants";

const numberFormat = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);

const ChapterGraph = ({ history }) => {
  const { chartData, initialAmount } = useContext(GlobalContext);
  const { title } = useParams();

  return (
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
      <div className={styles.details}>
        <h5>You chose {title}</h5>
        <p>
          With an initial amount of {numberFormat(initialAmount)}, you'd end up
          having{" "}
          {numberFormat(
            chartData.datasets[0]?.data[
              chartData.datasets[0].data?.length - 2
            ]?.toFixed(2)
          )}{" "}
          after a tenure of 10 years.
        </p>
        <br />
        <span>
          {` Rate Assumed (${
            investmentOptions.find((item) => item.title === title)?.return
          })`}
        </span>
      </div>
    </motion.div>
  );
};

export default withRouter(ChapterGraph);
