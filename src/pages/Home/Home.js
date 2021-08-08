import styles from "./Home.module.scss";
import coinImage from "../../assets/Home/coin.png";
import { Grid } from "@material-ui/core";

const Home = () => {
  return (
    <div className={styles.container}>
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12} md={8} lg={8} xl={8}>
          <div className={styles.heroHeading}>
            <h3>Let's Visualize</h3>
            <h1>Finance</h1>
          </div>
        </Grid>
        <Grid item sm={4} xs={12} md={4} lg={4} xl={4}>
          <div className={styles.heroParaContainer}>
            <div className={styles.heroPara}>
              <p>
                Investing is an act of buying assets or items that help you
                generate income in the long run.
              </p>
              <br />
              <span>SCROLL TO DISCOVER</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
