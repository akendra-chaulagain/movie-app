// import SearchIcon from '@material-ui/icons/SearchOutlined';
import Menu from '@material-ui/icons/Menu';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../authContext/Contex';
import { Logout } from '../../authContext/Action';


const Navbar = ({ lists }) => {
    const { dispatch } = useContext(AuthContext)
    const handlelogout = () => {
        dispatch(Logout())
        window.location.replace("/login")
    }

    // state for search 
    const [search, setSearch] = useState([])
    // console.log(search);

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        const newFilter = lists.filter((value) => {
            return value.title.includes(searchWord)
        })
        setSearch(newFilter)
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <span className="navbar-brand" to="#">Ak movies</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><Menu style={{ color: "white" }} /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " to="/">Homepage</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/series=true">Series</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/movies=true">Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">New and Popular</Link>
                            </li>


                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                               


                                <li className="nav-item">
                                    <Link className='nav-link' to={`/profile/user`}>Profile</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className='nav-link' to={`/search`}>Search</Link>
                                </li> */}


                                <li className="nav-item">
                                    <Link className="nav-link" to="#" onClick={handlelogout}>LogOut</Link>
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
