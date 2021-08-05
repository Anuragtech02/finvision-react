import styles from "./Home.module.scss";
import Coin from "../../assets/Home/coin.png";

const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={Coin} alt="" />
      <h2 className={styles.sideHeading}>LETS VISUALIZE</h2>
      <h1 className={styles.mainHeading}>FINANCE </h1>
      <p className={styles.para}>
        Investing is an act of buying assets or items that help you generate
        income in the long run.
        <br />
        <br />
        <span style={{ fontSize: "0.9rem", fontWeight: "300" }}>
          &#8595; SCROLL TO DISCOVER
        </span>
      </p>
    </div>
  );
};
export default Home;
