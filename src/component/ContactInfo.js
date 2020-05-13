import React from "react";
import "../App.css";
import { useFormik } from "formik";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const initialValues = {
  fname: "",
  lname: "",
  pcode: "",
  email: "",
  phno: "",
  addinfo: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};
const onReset = (values) => {
  values = initialValues;
};
const validate = (values) => {
  let errors = {};

  if (!values.fname) {
    errors.fname = "Required";
  }
  if (!values.lname) {
    errors.lname = "Required";
  }
  if (!values.pcode) {
    errors.pcode = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email format";
  }
  if (!values.phno) {
    errors.phno = "Required";
  }
  if (!values.addinfo) {
    errors.addinfo = "Required";
  }
  return errors;
};
function ContactInfo() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
    onReset,
  });

  console.log("Form Errors : ", formik.errors);
  //   console.log("Form values: ", formik.values);

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <h3>Customer contact Info</h3>
        <div className="form-control">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={formik.handleChange}
            value={formik.values.fname}
          />

          {formik.errors.fname ? (
            <div className="error">{formik.errors.fname}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={formik.handleChange}
            value={formik.values.lname}
          />
          {formik.errors.lname ? (
            <div className="error">{formik.errors.lname}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="pcode">Postal Code</label>
          <input
            type="tel"
            id="pcode"
            name="pcode"
            onChange={formik.handleChange}
            value={formik.values.pcode}
          />
          <i className="classwithicon">
            <MdLocationOn />
          </i>
          {formik.errors.pcode ? (
            <div className="error">{formik.errors.pcode}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail Address</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <i className="classwithicon">
            <MdEmail />
          </i>
          {formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control" id="form-icon">
          <label htmlFor="phno">Phone Number</label>
          <input
            type="tel"
            id="phno"
            name="phno"
            onChange={formik.handleChange}
            value={formik.values.phno}
          />
          <i className="classwithicon">
            <FaPhoneAlt />
          </i>
          {formik.errors.phno ? (
            <div className="error">{formik.errors.phno}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="addinfo">Additional Information</label>
          <input
            type="text"
            id="addinfo"
            name="addinfo"
            onChange={formik.handleChange}
            value={formik.values.addinfo}
          />
          {formik.errors.addinfo ? (
            <div className="error">{formik.errors.addinfo}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default ContactInfo;
