import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>
        - This is a proof-of-concept website for our financial visualisation
        concept.
        <br /> - All of the information we gathered came from reliable sources
        like Bajaj Finserv, Investopedia, the Ministry of Finance, Policybazaar,
        etc. <br /> - Users will benefit from more accurate and precise data as
        our website evolves. <br /> - We don't use real-time data; all of our
        data is pre-programmed. Only for the purpose of depiction, there are
        randomly generated values.
        <br /> - The graph's gains and losses are fictitious. There are randomly
        generated values only for the purpose of depiction
      </p>
    </div>
  );
};
export default Footer;
