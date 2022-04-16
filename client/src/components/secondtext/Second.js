import React from "react";
import "./second.css";

const second = () => {
  return (
    <>
      <div className="container-fluid Second">
        <div className="row">
          <div className="col-md-6 leftSideSecond">
            <div className="text-center textWrrapper">
              <h2>Enjoy on your TV.</h2>
              <p>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
          </div>
          <div className="col-md-6 rightsideSecond">
            <div className="rightSideSecongImg mb-5">
              <img src="./images/movie.jpg" alt="ak" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <hr />
    </>
  );
};

export default second;
