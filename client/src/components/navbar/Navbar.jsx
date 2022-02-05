import SearchIcon from '@material-ui/icons/SearchOutlined';
import Notification from '@material-ui/icons/Notifications';
import DownArrow from '@material-ui/icons/KeyboardArrowDown';
import Menu from '@material-ui/icons/Menu';
import "./Navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <span className="navbar-brand" to="#"><img src="../images/logo.jpg" alt="" /></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><Menu style={{ color: "white" }} /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " to="#">Homepage</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Series</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">New and Popular</Link>
                            </li>
                            <li className="nav-item my-list">
                                <Link className="nav-link " to="#">My List</Link>
                            </li>

                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link search-icon" to="#"><SearchIcon /></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">KID</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#"><Notification /></Link>
                                </li>
                                <li className="nav-item">
                                    <img src="../images/profile.jpg" alt="" />
                                </li>
                                <li className="nav-item dropDown-icon">
                                    <Link className="nav-link " to="#"><DownArrow /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar;
