import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import styles from "./App.module.scss";
import rightGradient from "./assets/gradients/right-gradient.svg";
import leftGradient from "./assets/gradients/left-gradient.svg";
import Navbar from "./components/Navbar/Navbar";
import InputField from "./components/InputField/InputField";
import Cursor from "./components/Cursor/Cursor";
// import InputField from "./components/InputField/InputField";
// import Cursor from "./components/Cursor/Cursor";
import { Home, Learn } from "./pages";
import About from "./pages/About/About";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Card title="Share Market" returnRate="Avg. 17%" risk="High"></Card>
          <Card
            title="Hold in your Savings Accounts"
            returnRate="Avg. 17%"
            risk="Nil"
          ></Card>
          <Card title="Share Market" returnRate="Avg. 17%" risk="High"></Card>
          <Card title="Share Market" returnRate="Avg. 17%" risk="High"></Card>
        </div>
        <div className={styles.gradientRight}>
          {/* <div className={styles.gradientRight}>
          <img src={rightGradient} alt="finvision-gradient" />
        </div>
        <div className={styles.gradientLeft}>
          <img src={leftGradient} alt="finvision-gradient" />
        </div> */}
        </div>
        {/*<Router basename="/finvision-react">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/learn" component={Learn} />
            <Route exact path="/about" component={About} />
          </Switch>
      </Router>*/}
        {/* <div className={styles.gradientLeft}>
        <img src={leftGradient} alt="finvision-gradient" />
      </div> */}
      </div>
    </>
  );
};

export default App;
