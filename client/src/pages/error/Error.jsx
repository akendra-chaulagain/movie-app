import { Link } from "react-router-dom";
import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <>
      <div className="container-fluid errorpage">
        <div className="row ">
          <div className="col-12  mt-5 pt-5">
            <h1 className="mt-5 pt-3 text-center">Lost Your Way?</h1>
            <h3 className="text-center">
              Sorry, we can't find the page. you'll find lots to explore on the
              home page.
            </h3>
            <Link className="signupLink " to="/">
              <button className="error-btn">Home Page</button>
            </Link>

            <h2 className="text-center mt-3">Error Code- 404</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
