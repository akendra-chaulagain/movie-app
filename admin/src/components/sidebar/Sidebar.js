import React from 'react';
import "./Sidebar.css"
import { LineStyle, Person, Timeline, TrendingUp, BarChart, FeedbackOutlined, MailOutline, MessageOutlined, ShoppingBasket, Report, AttachMoney, PlayArrow } from '@material-ui/icons';
import { Link } from "react-router-dom";





const Sidebar = () => {
    return (
        <>
            <div className=" sidebar">
                <div className="sidebar-box">
                    <div className="sidebartitle">Dashboard</div>
                    <div className="sidebarList">
                        {/* it render to home page folder in   */}
                        <li className='sidebarItems mt-1'>
                            <Link className='link' to="/">
                                <LineStyle className="sidebarIcons" style={{ marginRight: 8 }} />
                                Home
                            </Link>

                        </li>
                        {/* analtics page */}
                        <li className='sidebarItems mt-1'>
                            <Timeline className="sidebarIcons" style={{ marginRight: 8 }} />
                            Analytics
                        </li>
                        {/* sales page */}
                        <li className='sidebarItems mt-1'>
                            <TrendingUp className="sidebarIcons" style={{ marginRight: 8 }} />
                            Sales
                        </li>
                    </div>

                    <div className="sidebartitle mt-3">Quick Menu</div>
                    <div className="sidebarList">

                        {/* users link which render to userlist page */}
                        <li className='sidebarItems mt-1'>
                            <Link className='link' to="/users">
                                <Person className="sidebarIcons" style={{ marginRight: 8 }} />
                                Users
                            </Link>

                        </li>

                        {/* product link */}
                        <Link className='link' to="/movielist">
                            <li className='sidebarItems mt-1'>
                                <PlayArrow className="sidebarIcons" style={{ marginRight: 8 }} />
                                Movies
                            </li>
                        </Link>
                        {/* transaction page */}
                        <li className='sidebarItems mt-1'>
                            <AttachMoney className="sidebarIcons" style={{ marginRight: 8 }} />
                            Transaction
                        </li>
                        {/* reports page */}
                        <li className='sidebarItems mt-1'>
                            <BarChart className="sidebarIcons" style={{ marginRight: 8 }} />
                            Reports
                        </li>
                    </div>



                    <div className="sidebartitle mt-3">Notification</div>
                    <div className="sidebarList">
                        {/* email page */}
                        <li className='sidebarItems mt-1'>
                            <MailOutline className="sidebarIcons" style={{ marginRight: 8 }} />
                            Mail
                        </li>
                        {/* feedback page */}
                        <li className='sidebarItems mt-1'>
                            <FeedbackOutlined className="sidebarIcons" style={{ marginRight: 8 }} />
                            Feedback
                        </li>
                        {/* messages page */}
                        <li className='sidebarItems mt-1'>
                            <MessageOutlined className="sidebarIcons" style={{ marginRight: 8 }} />
                            Message
                        </li>
                    </div>


                    <div className="sidebartitle mt-3">Staff</div>
                    <div className="sidebarList">
                        {/* manage page */}
                        <li className='sidebarItems mt-1'>
                            <ShoppingBasket className="sidebarIcons" style={{ marginRight: 8 }} />
                            Manage
                        </li>
                        {/* Analytics page */}
                        <li className='sidebarItems mt-1'>
                            <Timeline className="sidebarIcons" style={{ marginRight: 8 }} />
                            Analytics
                        </li>
                        {/* report page */}
                        <li className='sidebarItems mt-1'>
                            <Report className="sidebarIcons" style={{ marginRight: 8 }} />
                            Reports
                        </li>
                    </div>


                </div>
            </div>
        </>
    )
};

export default Sidebar;
