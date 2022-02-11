import React from 'react';
import "./Topbar.css"
import Setting from '@material-ui/icons/Settings';
import Notification from '@material-ui/icons/NotificationImportantOutlined';



const Topbar = () => {
  return (
    <>
      <div className="container-fluid topbar">
        <div className="row topbar">
          <div className="col-4 left">
            <h3>Akadmin</h3>
          </div>
          <div className="col-8 right text-end">
            <Setting className='icon ' />
            <span className='topIconBadge'>4</span>
            <Notification className='icon' />
            <span className='topIconBadge'>6</span>
            <img className='img-fluid' src="../images/profile.jpeg" alt="profile-img" />
          </div>
        </div>
      </div>
    </>
  )
};

export default Topbar;
