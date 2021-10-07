import "./App.css";

import React, { Component, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <Navbar />

      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <h3>
            <i class="fas fa-arrow-up "></i>
          </h3>
        </button>
      )}

      <Switch>
        <Route exact path="/">
          <News category="general" />
        </Route>
        <Route exact path="/business">
          <News category="business" />
        </Route>
        <Route exact path="/technology">
          <News category="technology" />
        </Route>
        <Route exact path="/entertainment">
          <News category="entertainment" />
        </Route>
        <Route exact path="/health">
          <News category="health" />
        </Route>
        <Route exact path="/science">
          <News category="science" />
        </Route>
        <Route exact path="/sports">
          <News category="sports" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
