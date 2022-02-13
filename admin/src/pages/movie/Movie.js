import { Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import "./Movie.css";


const Movie = () => {
    return (
        <>


            <div className="container-fluid movie">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 ">
                        <div className="productContainerTitle">
                            <h1 >Product</h1>
                            <Link to="/newMovie">
                                <button>Create</button>
                            </Link>
                        </div>
                        <div className="row">
                            <div className="col-md-6 leftSideContainer">
                                <h4>Product Name</h4>
                                <form className='productForm'>
                                    <input type="text" placeholder='Mobile' />
                                    <div className="productForm mt-3">
                                        <label htmlFor="">In Stock</label><br />
                                        <select name="active" id="active">
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>
                                        </select>
                                    </div>
                                    <div className="productForm mt-3">
                                        <label htmlFor="">Active</label><br />
                                        <select name="active" id="active">
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <div className="productImg">
                                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                    <label htmlFor="file">
                                        <Publish />
                                    </label>
                                    <input type="file" id='file' style={{ display: "none", marginleft: 50 }} />
                                    <br />
                                    <button>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Movie;
