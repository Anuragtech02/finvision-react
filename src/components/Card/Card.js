import styles from "./Card.module.scss";

const Card = ({ title, risk, returnRate, children, props }) => {
  return (
    <div className={styles.container} {...props}>
      <h5>{title}</h5>
      <div className={styles.detailsContainer}>
        <div className={styles.riskContainer}>
          <p>Risk</p>
          <h6>{risk}</h6>
        </div>
        <div className={styles.riskContainer}>
          <p>Return</p>
          <h6>{returnRate}</h6>
        </div>
      </div>
    </div>
  );
};
export default Card;
