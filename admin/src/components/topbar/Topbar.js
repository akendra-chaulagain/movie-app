import React from 'react';
import "./Topbar.css"
// import { Notifications, Settings } from "@material-ui/icons"
import Setting from "@material-ui/icons/Settings"
import Notification from "@material-ui/icons/NotificationImportant"
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/Contex';



const Topbar = () => {
    const { dispatch } = useContext(AuthContext)
    // logOut user from the admin board
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
        alert("logOut successfull")
        window.location.replace("/login")
    }
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
                        <img className='img-fluid' src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile-img" />
                        <button onClick={handleLogout}>LogOut</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Topbar;
