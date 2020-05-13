import React, { Component } from "react";
import ParentPage from "./ParentPage";

class Sample extends Component {
  render() {
    return (
      <div>
        <br />
        <p>yearof birth : {this.props.data}</p>
        <p>Monthly income before taxes : </p>
        <p>Total liabilities, loans and credits</p>
        <p>Number of children in care</p>
        <p>Smoking?</p>
      </div>
    );
  }
}
export default Sample;
