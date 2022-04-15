// import SearchIcon from '@material-ui/icons/SearchOutlined';
import Menu from "@material-ui/icons/Menu";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  logOutfailure,
  logOutStart,
  logOutSuccess,
} from "../../redux/userRedux";
import axios from "axios";
import { ToastContainer, toast, Zoom } from "react-toastify";

const Navbar = ({ setSearchresult }) => {
  const dispatch = useDispatch();
  // logOut User
  const handlLogout = async () => {
    dispatch(logOutStart());
    try {
      await axios.post("/auth/logout", null).then(() => {
        dispatch(logOutSuccess());
        toast.success(" Logout Success!", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
          transition: Zoom,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    } catch (error) {
      dispatch(logOutfailure());
      toast.error(" Something went wrong. unable to update!", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        transition: Zoom,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <span className="navbar-brand" to="/">
            Ak movies
          </span>
          {/* search box  for less than 768px*/}
          <div className="searchContainerLess">
            <input
              type="text"
              placeholder="Search "
              onChange={(e) => setSearchresult(e.target.value)}
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <Menu style={{ color: "white" }} />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Homepage
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/series=true">
                  Series
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies=true">
                  Movies
                </Link>
              </li>
              {/* search box  for more than 768px*/}
              <div className="searchContainer">
                <input
                  type="text"
                  placeholder="Search "
                  onChange={(e) => setSearchresult(e.target.value)}
                />
              </div>
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to={`/profile/user`}>
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={handlLogout}>
                    LogOut
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
};

export default Navbar;
