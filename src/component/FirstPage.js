import React, { Component } from "react";

const initialState = {
  yearofbirth: "",
  children: "",
  earnings: "",
  liabilities: "",
  smokingOption: "",
  yearofbirthError: "",
  childrenError: "",
  earningsError: "",
  liabilitiesError: "",
  smokingError: "",
};
class ParentPage extends Component {
  state = initialState;

  handleChange = (event) => {
    // const isSmoking = event.target.type === "radio";
    // this.setState({
    //   [event.target.name]: isSmoking
    //     ? event.target.checked
    //     : event.target.value,
    // });
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSmokeChange = (event) => {
    this.setState({ smokingOption: event.target.value });
  };
  validate = () => {
    let yearofbirthError = "";
    let childrenError = "";
    let earningsError = "";
    let liabilitiesError = "";
    let smokingError = "";

    if (!this.state.yearofbirth) {
      yearofbirthError = "Invalid yearofbirth";
    }
    if (!this.state.children) {
      childrenError = "Invalid number of children";
    }
    if (!this.state.earnings) {
      earningsError = "Invalid earnings";
    }
    if (!this.state.liabilities) {
      liabilitiesError = "Invalid liabilities";
    }
    if (!this.state.smokingOption) {
      smokingError = "smoking cannot be blank";
    }

    if (
      yearofbirthError ||
      childrenError ||
      earningsError ||
      liabilitiesError ||
      smokingError
    ) {
      this.setState({
        yearofbirthError,
        childrenError,
        earningsError,
        liabilitiesError,
        smokingError,
      });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    let { smokingOption } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="yearofbirth"></label> Year of Birth
          <input
            className="list"
            type="text"
            name="yearofbirth"
            pattern="[0-9]{0,4}"
            value={this.state.yearofbirth}
            onChange={this.handleChange}
          />
          <div className="firstError">{this.state.yearofbirthError}</div>
          <label htmlFor="children">Children</label>
          <input
            className="list"
            type="text"
            name="children"
            pattern="[0-9]{0,2}"
            value={this.state.children}
            onChange={this.handleChange}
          />
          <div className="firstError">{this.state.childrenError}</div>
          <label htmlFor="earnings"> Earnings</label>
          <input
            className="list"
            type="text"
            name="earnings"
            pattern="[0-9]{0,7}"
            value={this.state.earnings}
            onChange={this.handleChange}
          />
          <div className="firstError">{this.state.earningsError}</div>
          <label htmlFor="liabilities">Liabilities</label>
          <input
            className="list"
            type="text"
            name="liabilities"
            pattern="[0-9]{0,7}"
            value={this.state.liabilities}
            onChange={this.handleChange}
          />
          <div className="firstError">{this.state.liabilitiesError}</div>
          <label htmlFor="smoking">
            <input
              type="radio"
              className="list"
              name="smoking"
              value="Yes"
              checked={smokingOption === "Yes"}
              onChange={this.handleSmokeChange}
            />
            Yes
          </label>
          <label htmlFor="smoking">
            <input
              type="radio"
              className="list"
              name="smoking"
              value="No"
              checked={smokingOption === "No"}
              onChange={this.handleSmokeChange}
            />
            No
          </label>
          <div className="firstError">{this.state.smokingError}</div>
          <div>Smoking : {this.state.smokingOption}</div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default ParentPage;
