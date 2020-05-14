import React from "react";

const FormData = (props) => {
  return (
    <div className="col-md-6">
      <form>
        <label htmlFor="yearOfBirth" /> YearOfBirth
        <input
          type="text"
          name="yearofbirth"
          className="form-group"
          placeholder="Enter Year of Birth"
          value={props.userData.yearOfBirth}
          onChange={props.formHandler}
        />
        <label htmlFor="Salary" /> Salary
        <input
          type="text"
          name="Salary"
          className="form-group"
          placeholder="Enter Salary"
          value={props.userData.salary}
          onChange={props.formHandler}
        />
        <div className="form-group">
          <button onClick={props.saveUserData} className="btn btn-primary">
            Submit and Save Data
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormData;
