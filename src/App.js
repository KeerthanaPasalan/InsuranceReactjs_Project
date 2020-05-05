import React, { Component } from "react";
import "./App.css";
import ContactInfo from "./component/ContactInfo";
import FirstPage from "./component/FirstPage";
import CoveragePage from "./component/CoveragePage";

class App extends Component {
  render() {
    return (
      <div>
        {/* <CoveragePage /> */}
        <FirstPage />
        {/* <ContactInfo /> */}
      </div>
    );
  }
}
export default App;
