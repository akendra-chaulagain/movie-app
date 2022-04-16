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
          <div className="container-fluid register">
            <div className="topContent">
              <span className="navbar-brand" to="#">
                Ak movies
              </span>
            </div>

            <div className="row">
              <div className="container-text ">
                <h2 className="text-center mainTitle ">
                  Unlimated movies, Tv shows , and more.
                </h2>
                <h3 className="text-center"> Watch anywhere.Cancel anytime</h3>
              </div>

              {/* register from */}
              <div className="input-box  ">
                <h2 className="mt-2 mb-2 text-center">Sign Up</h2>

                <div>
                  <RegisterTextField
                    type="email"
                    className="form-control mt-2"
                    name="email"
                    placeholder="enter your email"
                  />
                </div>
                <div>
                  <RegisterTextField
                    type="text"
                    className="form-control mt-4"
                    placeholder="enter your username"
                    name="username"
                  />
                </div>
                <div>
                  <RegisterTextField
                    type="password"
                    className="form-control mt-4 "
                    placeholder="enter your password"
                    name="password"
                  />
                </div>
                <div>
                  <RegisterTextField
                    type="password"
                    className="form-control mt-4"
                    name="cpassword"
                    placeholder="confirm password"
                  />
                </div>

                <button className="start-btn" disabled={isFetching}>
                  register
                </button>
                <span className="ak">
                  Already have an account ?
                  <Link to="/login" className="link">
                    Sign In
                  </Link>
                </span>
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
