import React from "react";
import "./FirstText.css";
import { Link } from "react-router-dom";


const FirstText = () => {
  return (
    <>
      <div className="container-fluid FirstText">
        <div className="topContent">
          <h2 className="navbar-brand" to="/">
            Ak movies
          </h2>
          <Link to="/login">
            <button className="tobarButtonn">sign in</button>
          </Link>
        </div>
        <div className="firstWrapper">
          <div className="wrappertext">
            <h2 className="text-center">
              Watch Unlimited movies, TV shows, and more.
            </h2>
            <p className="text-center">Watch anywhere. Cancel anytime.</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default FirstText;
