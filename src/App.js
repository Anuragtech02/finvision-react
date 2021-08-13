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
import { Home, Learn, Chapter, ChapterGraph } from "./pages";
import GlobalContextProvider from "./utils/contexts/GlobalContext";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className={styles.container}>
        <div className={styles.gradientRight}>
          {/* <div className={styles.gradientRight}>
          <img src={rightGradient} alt="finvision-gradient" />
          </div>
          <div className={styles.gradientLeft}>
          <img src={leftGradient} alt="finvision-gradient" />
        </div> */}
        </div>

        <Router basename="/finvision-react">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/learn" component={Learn} />
            <Route exact path="/learn/:id" component={Learn} />
            <Route exact path="/learn/chapter/:id/:subId" component={Chapter} />
            <Route
              exact
              path="/learn/chapter/:id/:subId/:title"
              component={ChapterGraph}
            />
          </Switch>
        </Router>

        {/* <div className={styles.gradientLeft}>
        <img src={leftGradient} alt="finvision-gradient" />
      </div> */}
      </div>
    </GlobalContextProvider>
  );
};

export default App;
