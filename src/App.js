import React from "react";
import { withFormik, Form, Field } from "formik";
import { Button, Container, Row, Col, FormGroup, Label} from "reactstrap";
// import * as Yup from 'yup';
import { string, object } from "yup";
import "./App.css";

const App = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              {touched.email && errors.email && <h2>{errors.email}</h2>}
              <Field type="email" name="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              {touched.password &&
                errors.password && <h2>{errors.password}</h2>}
              <Field type="password" name="password" placeholder="Password" />
            </FormGroup>
            <FormGroup>
            <Label htmlFor="update">
              <Field type="checkbox" name="update" checked={values.update} />
              Send updates
            </Label>
            </FormGroup>
            <FormGroup>
            <Field component="select" name="plan">
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </Field>
            </FormGroup>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
const AppFormik = withFormik({
  mapPropsToValues({ email, password, update, plan }) {
    return {
      email: email || "",
      password: password || "",
      update: update || true,
      plan: plan || ""
    };
  },
  validationSchema: object().shape({
    email: string()
      .email("Email is invalid")
      .required("Email is required!"),
    password: string()
      .min(3, "password must contain more than 2 charactes")
      .required("password must be provided!")
  }),
  handleSubmit(values, { setErrors, resetForm, setSubmitting }) {
    //bag
    //async tasks: fetch data from db or api
    setTimeout(() => {
      if (values.email === "rraju12@gmail.com") {
        setErrors({ email: "Email is already taken, please use another one!" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(App);
export default AppFormik;
