import styles from "./Home.module.scss";
import coinImage from "../../assets/Home/coin.png";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroHeading}>
        <h3>Let's Visualize</h3>
        <h1>Finance</h1>
      </div>
      <div className={styles.heroPara}>
        <p>
          Investing is an act of buying assets or items that help you generate
          income in the long run.
        </p>
        <br />
        <span>SCROLL TO DISCOVER</span>
      </div>
    </div>
  );
};
export default Home;
