import SearchIcon from '@material-ui/icons/SearchOutlined';
import Notification from '@material-ui/icons/Notifications';
import DownArrow from '@material-ui/icons/KeyboardArrowDown';
import Menu from '@material-ui/icons/Menu';
import "./Navbar.css"


const Navbar = () => {
    

    return (
        <>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <span className="navbar-brand" href="#"><img src="../images/logo.jpg" alt="" /></span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><Menu style={{ color: "white" }} /></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Homepage</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Series</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Movies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">New and Popular</a>
                                </li>
                                <li className="nav-item my-list">
                                    <a className="nav-link " href="#">My List</a>
                                </li>

                            </ul>
                            <div className="d-flex">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link search-icon" href="#"><SearchIcon /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">KID</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><Notification /></a>
                                    </li>
                                    <li className="nav-item">
                                        <img src="../images/profile.jpg" alt="" />
                                    </li>
                                    <li className="nav-item dropDown-icon">
                                        <a className="nav-link " href="#"><DownArrow /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            {/* </div> */}
        </>
    )
};

export default Navbar;
