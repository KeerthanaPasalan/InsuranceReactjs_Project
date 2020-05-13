import React, { Component } from "react";
// import "./App.css";
import ParentPage from "./component/ParentPage";
import Navigate from "./component/Navigate";
import Sample from "./component/Sample";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Sample /> */}
        <ParentPage />
        {/* <Navigate /> */}
      </div>
    );
  }
}

export default App;
