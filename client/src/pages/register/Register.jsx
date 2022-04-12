import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
// ReactToastify is use for alert
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { registerUser } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // register user
  const handelRegister = async (e) => {
    e.preventDefault();
    registerUser(dispatch, { email, password, username });
  };

  return (
    <>
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
          <form action="" className="input-box  ">
            <h2 className="mt-1 mb-2 text-center">Sign Up</h2>

            <div>
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-2"
                placeholder="ak@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="mt-3">Username</label>

              <input
                type="text"
                className="form-control"
                placeholder="username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label className="mt-3">Password</label>

              <input
                type="password"
                className="form-control "
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="start-btn"
              onClick={handelRegister}
              disabled={isFetching}
            >
              Sign Up
            </button>
            <span className="ak">
              Already have an account ?
              <Link to="/login" className="link">
                Sign In
              </Link>
            </span>
          </form>
        </div>
      </div>
      {/* ReactToastify container */}
      <ToastContainer />
    </>
  );
};

export default Register;
