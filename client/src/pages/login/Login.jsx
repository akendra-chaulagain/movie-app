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
          <div className=" loginPage">
            <div className="loginFrom">
              <h2 className="loginTitle">Ak movies</h2>
              <div className=" LoginFormContainer">
                <h4>Sign-In</h4>
                <div className="inputBox mt-3">
                  <label>Email</label>
                  <RegisterTextField
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="ak@gmail.com"
                  />
                </div>

                <div className="inputBox mt-2">
                  <label>Password</label>
                  <RegisterTextField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="password"
                  />
                </div>
                <div className="inputBox mt-2">
                  {/* login button */}
                  <button disabled={isFetching}>Continue</button>
                </div>
              </div>
              <p>
                Don't have an account ?{/* render to login page when click */}
                <Link className="link" to="/register">
                  <span>SIGN UP</span>
                </Link>
              </p>
              <div className="terms">
                By creating an account, you agree to ak movies's Conditions of
                Use and Privacy Notice.
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
