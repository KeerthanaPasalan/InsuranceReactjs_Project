import React from "react";

const SaveData = (props) => {
  return (
    <div>
      <div>Year of Birth : {props.userData.yearOfBirth}</div>
      <div>Salary : {props.userData.salary}</div>
    </div>
  );
};
export default SaveData;
