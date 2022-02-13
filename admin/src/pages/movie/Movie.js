import { Publish } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import "./Movie.css";
import axios from "axios"



const Movie = () => {
    const location = useLocation()
    const path = (location.pathname.split("/")[2]);
    const [singleMovie, setSingleMovie] = useState("")


    // get movie by id
    useEffect(() => {
        const getMovie = async () => {
            const res = await axios.get("/movies/find/" + path, {
                headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDczNDYzMCwiZXhwIjoxNjQ1MTY2NjMwfQ.E3TKGuILa-XpMdf3HMiz9plBwqxYytjhZbOG9GJCwDM"
                }
            })
            setSingleMovie(res.data);
        }
        getMovie()
    }, [path])
    console.log(singleMovie);


    return (
        <>
            <div className="container-fluid movie">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 ">
                        <div className="productContainerTitle">
                            <h1 >Movie</h1>
                            <Link to="/newMovie">
                                <button>Create</button>
                            </Link>
                        </div>
                        <div className="row">
                            {/* left side container */}
                            <div className="col-md-6 leftSideContainer">
                                <h4>Movie Name</h4>
                                <form className='productForm'>
                                    <label htmlFor="">Movie Title</label><br />
                                    <input type="text" placeholder={singleMovie.title} /><br />

                                    <label htmlFor="">Limit</label><br />
                                    <input type="number" placeholder={singleMovie.limit} /><br />

                                    <label htmlFor="">Genre</label><br />
                                    <input type="text" placeholder={singleMovie.genre} /><br />


                                    <label htmlFor="">Release Date</label><br />
                                    <input type="number" placeholder={singleMovie.year} /><br />

                                    <label htmlFor="">Trailer</label><br />
                                    <input type="file" /><br />
                                    <label htmlFor="">Video</label><br />
                                    <input type="file" />


                                </form>
                            </div>
                            {/* right side */}
                            <div className="col-md-6">
                                <div className="productImg">
                                    <img src={singleMovie.img} alt="" />
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
