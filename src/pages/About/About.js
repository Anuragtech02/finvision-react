import styles from "./About.module.scss";
import sphere from "../../assets/About/about-football.png";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p>ABOUT US</p>
        <h1 className={styles.heading}>
          <span className={styles.spanHeading}> A NEW WORLD </span> <br />
          INVESTING
        </h1>
        <p>
          Economically, it can be defined as the act of purchasing assets or
          goods that won’t be consumed today but will be used to create wealth
          in the future.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={sphere} alt="" />
      </div>
    </div>
  );
};
export default About;
