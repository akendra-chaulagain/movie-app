import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
// ReactToastify is use for alert
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { registerUser } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import RegisterTextField from "../../components/RegisterTextField/RegisterTextField";

const Register = () => {
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  // yup validation is used
  const validate = Yup.object({
    email: Yup.string().email("Invalid email!").required("Email is required!"),
    username: Yup.string().required("Username is required!"),
    password: Yup.string()
      .min(6, "Password is too short -should be 6 characters minimum")
      .required("Password is required!"),
    cpassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "password does not match!"
    ),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          cpassword: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          registerUser(dispatch, values);
        }}
      >
        <Form>
          <div className=" registerPage">
            <div className="registerFrom">
              <h2 className="registerTitle">Ak movies</h2>
              <div className=" registerFormContainer">
                <h4>Create An Account</h4>
                {/* name */}
                <div className="inputBox mt-2">
                  <label>UserName</label>
                  <RegisterTextField
                    label="UserName"
                    name="username"
                    type="text"
                    placeholder="biraj"
                  />
                </div>
                {/* email */}
                <div className="inputBox">
                  <label>Email</label>

                  <RegisterTextField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="a@gmail.com"
                  />
                </div>
                {/* password */}
                <div className="inputBox">
                  <label>Password</label>

                  <RegisterTextField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="password"
                  />
                </div>
                {/* cpassword */}
                <div className="inputBox">
                  <label>Confirm Password</label>

                  <RegisterTextField
                    label="Confirm Password"
                    name="cpassword"
                    type="password"
                    placeholder="confirm password"
                  />
                </div>
                <div className="inputBox">
                  {/* <button onClick={handleRegister}>Continue</button> */}
                  <button disabled={isFetching}>Continue</button>
                </div>
              </div>
              <p>
                Already have an account ?{/* render to login page when click */}
                <Link className="link" to="/login">
                  <span className="siginInBtn">SIGN IN</span>
                </Link>
              </p>
              <div className="terms">
                By creating an account, you agree to All In One's Conditions of
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

export default Register;
