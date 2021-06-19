import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import CreateGraph from './components/CreateGraph';
// import './App.css';
import NavBar from "./components/NavBar";
import Test from "./components/Test";
import { data } from "./components/data";
import Extra from "./components/Extra";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <h1>Welcome to Prerequisites visualiser.</h1>
          </Route>

          <Route exact path="/computer-science">
            <Test data={data.computer_science} />
          </Route>

          <Route exact path="/physics">
            <Test data={data.physics} />
            {/* <Extra/> */}
          </Route>
        </Switch>
        <Footer />
      </Router>

      {/* <NavBar/>
     <Test/> */}
    </div>
  );
}

export default App;
