import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
// ReactToastify is use for alert
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/apiCalls";

const Login = () => {
  const dispactch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   handle login
  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(dispactch, { email, password });
  };

  return (
    <>
      <div className="container-fluid login">
        <div className="topContent">
          <span className="navbar-brand" to="#">
            Ak movies
          </span>
          <button className="start-btnsignIn ">
            <Link to="/register">Sign Up</Link>
          </button>
        </div>

        <div className="row login-form">
          <div className=" login-input ">
            <form className="signupInputbox">
              <div className="mb-3">
                <h2 className="mt-3 mb-4 text-center">Sign In</h2>

                <input
                  type="email"
                  className="form-control mt-2"
                  placeholder="lo@gmail.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control mt-2"
                  placeholder="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                onClick={handleLogin}
                className="login-btn mt-4"
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

              <p>
                This page is protected by Google reCAPTCHA .
                <Link className="signupLink " to="https://www.netflix.com/np">
                  <br />
                  Learn more.
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* ReactToastify container */}
      <ToastContainer />
    </>
  );
};

export default Login;
