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
        </div>

        <div className="row login-form">
          <div className=" login-input ">
            <form className="signupInputbox">
              <div className="mb-3">
                <h2 className="mt-1 mb-2 text-center">Sign In</h2>
                <label>Email</label>
                <input
                  type="email"
                  className="form-control mt-2"
                  placeholder="lo@gmail.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
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
                className="login-btn mt-2"
                disabled={isFetching}
              >
                Submit
              </button>
              <p className="mt-4">
                New to Ak movies ?
                <Link className="signupLink" to="/register">
                  Sign up
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
