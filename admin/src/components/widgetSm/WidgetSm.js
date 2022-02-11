import React from 'react';
import "./WidgetSm.css";
import { RemoveRedEye } from '@material-ui/icons';




const WidgetSm = () => {
  return (
    <>
      <div className="container-fluid widgetSm">
        <span className="widgetSmTitle">New Join members</span>
        <div className="row mt-2">

          {/* first */}
          <div className="col-md-3">
            <img src="../images/profile.jpeg" alt="" />
          </div>
          <div className="col-md-6 ">
            <h6>Akendra chaulagain</h6>
            <p>Web Developer</p>
          </div>

          <div className="col-md-3  displaySm">
            <RemoveRedEye /> Display
          </div>

          {/* second */}

          <div className="col-md-3">
            <img src="../images/profile.jpeg" alt="" />
          </div>

          <div className="col-md-6 ">
            <h6>Akendra chaulagain</h6>
            <p>Web Developer</p>
          </div>

          <div className="col-md-3 text-center displaySm">
            <RemoveRedEye /> Display
          </div>

          {/* third */}
          <div className="col-md-3">
            <img src="../images/profile.jpeg" alt="" />
          </div>

          <div className="col-md-6 ">
            <h6>Akendra chaulagain</h6>
            <p>Web Developer</p>
          </div>

          <div className="col-md-3 text-center displaySm">
            <RemoveRedEye /> Display
          </div>

          {/* fourth */}
          <div className="col-md-3">
            <img src="../images/profile.jpeg" alt="" />
          </div>

          <div className="col-md-6 ">
            <h6>Akendra chaulagain</h6>
            <p>Web Developer</p>
          </div>

          <div className="col-md-3 text-center displaySm">
            <RemoveRedEye /> Display
          </div>

          {/* fifth */}
          <div className="col-md-3">
            <img src="../images/profile.jpeg" alt="" />
          </div>

          <div className="col-md-6 text-">
            <h6>Akendra chaulagain</h6>
            <p>Web Developer</p>
          </div>

          <div className="col-md-3 text-center displaySm">
            <RemoveRedEye /> Display
          </div>
        </div>

      </div>
    </>
  )
};

export default WidgetSm;
