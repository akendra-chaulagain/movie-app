
import React from 'react';
import "./User.css"
import { AccountCircleOutlined, CalendarTodayOutlined, EmailOutlined, LocationOnRounded, PhoneAndroidOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';




// exported in  app.js
const User = () => {
    return (
        <>
            <div className="container-fluid User">
                <div className="topContain">
                    <div className="UserTitle">Edit User</div>
                    <Link to="/newuser">
                        <button className="createButton">Create</button>
                    </Link>
                </div>
                <div className="row">
                    {/* left side container */}
                    <div className="col-md-4 userLeft mt-3">
                        <div className='profile_top'>
                            <img src="../images/profile.jpeg" alt="" />
                            <p>Akendra Chaulagain</p>
                        </div>

                        <div className="contactdetails ">
                            <h6>Account Details</h6>
                            <span><AccountCircleOutlined style={{ marginRight: 15 }} />akendra12</span>
                            <p><CalendarTodayOutlined style={{ marginRight: 15 }} />09.09.2004</p>

                        </div>

                        <div className="contactdetails ">
                            <h6>Contact Details</h6>
                            <span><PhoneAndroidOutlined style={{ marginRight: 15 }} />98765655</span>
                            <p><EmailOutlined style={{ marginRight: 15 }} />akendra@gmail.com</p>
                            <p><LocationOnRounded style={{ marginRight: 15 }} />Tikapur Kailali</p>

                        </div>

                    </div>



                    {/* right side container */}
                    <div className="col-md-7 rightside">
                        <div className="rightSideTitle">Edit</div>
                        <form className="userdetailForm">

                            <div className="inputBox">
                                <label >Username</label><br />
                                <input type="text" placeholder='akendra12' />
                            </div>
                            <div className="inputBox">
                                <label >Full Name</label><br />
                                <input type="text" placeholder='Akendra Chaulagain' />
                            </div>
                            <div className="inputBox">
                                <label >Email</label><br />
                                <input type="email" placeholder='akendra@gmail.com' />
                            </div>

                            <div className="inputBox">
                                <label >Phone</label><br />
                                <input type="number" placeholder='98766434' />
                            </div>

                            <div className="inputBox">
                                <label >Address</label><br />
                                <input type="text" placeholder='Tikapur kailali' />

                            </div>
                            <div className="updateButton">
                                <button >update</button>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
};

export default User;
