import React from "react";
import { withFormik, Form, Field } from "formik";
import "./App.css";

const App = ({ values, handleChange, handleSubmit }) => {
  //keys of the return obj from line 14
  console.log(handleChange);
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
const AppFormik = withFormik({
  mapPropsToValues({ email, password }) {
    // <AppFormik email="rraju12@gmail.com" />
    return {
      email: email || "",
      password: password || ''
    };
  },
  handleChange(e){
    console.log('jhoih',e);

  },
  handleSubmit(values){
    console.log(values);
    
  }
})(App);
export default AppFormik;
