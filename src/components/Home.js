import React from "react";
import "./Home.css";
import ashokaLogo from '../components/media/ashokaLogo.png';
import { height, width } from "dom-helpers";
const Home = () => {
  return (
    <React.Fragment>
      <div className="main-container">
          <img src = {ashokaLogo} alt="Ashoka Logo" style={{height: "60px", width: "60px"}}/>
        <h1>Check Course Prerequisites hassle-free</h1>
        <h2>Select major from the Navigation bar</h2>
      </div>
    </React.Fragment>
  );
};

export default Home;
