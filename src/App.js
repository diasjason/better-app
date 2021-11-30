import { Layout, Space, Typography } from "antd";
import React from "react";
import { Navbar, Homepage, Property, News } from "./components";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/property">
                <Property />
              </Route>
              <Route exact path="/news">
                <News simplified />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">This is the footer</div>
      </div>
    </div>
  );
};

export default App;
