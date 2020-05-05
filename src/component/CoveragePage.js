import React, { Component } from "react";
import "./CoveragePage.css";
import mainlogo from "./lahitapiola.png";
import { FaArrowLeft } from "react-icons/fa";

class CoveragePage extends Component {
  render() {
    return (
      <div className="main-container">
        <header className="header-wrapper">
          <img src={mainlogo} className="logo" alt="Logo" />
          <i className="classicon">
            <FaArrowLeft />
            <button className="backbutton">Back</button>
          </i>
        </header>

        <nav className="nav-container">
          <div className="coverage">
            <button className="langbutton">English</button>
            <button className="langbutton">Finnish</button>
            <h3>Life Insurance</h3>
          </div>
        </nav>
      </div>
    );
  }
}
export default CoveragePage;
