import "./assets/style.scss";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import app from "../../firebase";

const SignupComponent = ({ history }) => {
  const [error, setError] = useState();
  //history it's the browser history
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        setError(error.message);
      }
    },
    [history]
  );

  //this is

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be 3 characters at minimum")
      .required("Password is required"),
  });

  return (
    <div className="container-login container">
      <div className="row mb-5">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">Sign up</h1>
          <Link to="/login">Already have an account?</Link>
        </div>
      </div>
      <div className="row">
        <p style={{ fontSize: "12px", textAlign: "center", color: "red" }}>
          {" "}
          {error}
        </p>
        <div className="col-lg-12">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
          >
            {({ errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    placeholder="Enter email"
                    className="form-control inputs"
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="form-control inputs"
                  />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </div>

                <div className="text-center">
                  <button className="button-login " type="submit">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignupComponent);
