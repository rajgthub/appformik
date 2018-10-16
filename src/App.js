import React from "react";
import { withFormik, Form, Field } from "formik";
import "./App.css";

const App = ({ values }) => {
  //keys of the return obj from line 14
  // console.log(handleChange);

  return (
    <Form>
      {" "}
      {/*onSubmit={handleSubmit no need! implicitly passed */}
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <label htmlFor="update">
        <Field type="checkbox" name="update" checked={values.update} />
        Send updates
      </label>
      <Field component="select" name="plan">
      <option value="free">Free</option>
      <option value="paid">Paid</option>
      </Field>
      <button type="submit">Submit</button>
    </Form>
  );
};
const AppFormik = withFormik({
  mapPropsToValues({ email, password, update, plan }) {
    // <AppFormik email="rraju12@gmail.com" />
    return {
      email: email || "",
      password: password || "",
      update: update || true,
      plan: plan || ''
    };
  },
  // handleChange(e) {
  //   console.log("jhoih", e);
  // },
  handleSubmit(values) {
    console.log(values);
  }
})(App);
export default AppFormik;
