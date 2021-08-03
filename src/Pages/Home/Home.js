import styles from "./Home.module.scss";
import Coin from "../../assets/Home/Coin.svg";
const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={Coin} alt="" />
      <h2>Lets Visualize</h2>
      <h1>Finance</h1>
      <p>
        Investing is an act of buying assets or items that help you generate
        income in the long run.
      </p>
    </div>
  );
};
export default Home;
