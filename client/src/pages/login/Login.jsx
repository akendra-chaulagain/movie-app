import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
// ReactToastify is use for alert
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/apiCalls";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import RegisterTextField from "../../components/RegisterTextField/RegisterTextField";

const Login = () => {
  const dispactch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const validate = Yup.object({
    email: Yup.string().email("Invalid email!").required("Email is required!"),
    password: Yup.string().required("Password is required!"),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          loginUser(dispactch, values);
        }}
      >
        <Form>
          <div className="container-fluid login">
            <div className="topContent">
              <span className="navbar-brand" to="#">
                Ak movies
              </span>
            </div>

            <div className="row login-form">
              <div className=" login-input ">
                <div className="signupInputbox">
                  <div className="">
                    <h2 className="mt-2 mb-2 text-center">Sign In</h2>
                    {/* <label>Email</label> */}
                    <RegisterTextField
                      type="email"
                      className="form-control mt-4"
                      name="email"
                      placeholder="enter you email"
                    />
                  </div>
                  <div className="">
                    {/* <label>Password</label> */}
                    <RegisterTextField
                      type="password"
                      className="form-control "
                      name="password"
                      placeholder="enter your password"
                    />
                  </div>

                  <button
                    type="submit"
                    className="login-btn"
                    disabled={isFetching}
                  >
                    Submit
                  </button>
                  <p className="mt-2">
                    New to Ak movies ?
                    <Link className="signupLink" to="/register">
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ReactToastify container */}
          <ToastContainer />
        </Form>
      </Formik>
    </>
  );
};

export default Login;
