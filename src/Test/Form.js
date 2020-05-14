import React, { Component } from "react";
import FormData from "./FormData";
import SaveData from "./SaveData";
import { withRouter } from "react-router-dom";

class Form extends Component {
  state = {
    yearOfBirth: "1986 ",
    salary: "5000",
    saveClick: false,
  };

  handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.setState({
      [fieldName]: fieldValue,
    });
  };
  saveUserDetails = (event) => {
    event.preventDefault();
    this.setState({
      saveClick: true,
    });
    this.props.history.push("/SaveData");
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <FormData
          userData={this.state}
          formHandler={this.handleChange}
          saveUserData={this.saveUserDetails}
        />
        {/* {this.state.saveClick ? <SaveData userData={this.state} /> : ""} */}
        {/* <SaveData /> */}
      </div>
    );
  }
}
export default Form;
