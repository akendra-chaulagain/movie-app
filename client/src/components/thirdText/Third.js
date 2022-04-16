import React from "react";
import { Link } from "react-router-dom";
import "./Third.css";

const Third = () => {
  return (
    <>
      <div className="container-fluid Third">
        <div className="row">
          <div className="col-md-6 leftsideThird">
            <div className="leftSideSecongImg">
              <img src="./images/d.jpg" alt="ak" />
            </div>
          </div>
          <div className="col-md-6 rightSideThird">
            <div className="text-center textWrrapperThird">
              <h2>Watch offline.</h2>
              <p>
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <hr />
        {/* recommondation */}
        <div className=" reconmondation">
          <div className=" reconmondationInfo">
            <hr />
            <h5 className="text-center">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h5>

            {/* sign in button  */}
            <div className="loginbtn">
              <Link to="/login">
                <button>Sign-In</button>
              </Link>
            </div>

            <p>
              New user?
              <Link className="link" to="/register">
                <span>Start here.</span>
              </Link>
            </p>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Third;
