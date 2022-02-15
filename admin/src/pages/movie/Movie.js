import { DeleteOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import "./Movie.css";
import axios from "axios"



const Movie = () => {
    const location = useLocation()
    const path = (location.pathname.split("/")[2]);
    const [singleMovie, setSingleMovie] = useState("")

    // usestate fro the update movie
    const [title, setTitle] = useState({})
    const [limit, setLimit] = useState({})
    const [genre, setGenre] = useState({})
    const [date, setDate] = useState({})
    // const [img, setImg] = useState({})
    // const [video, setVideo] = useState({})




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


    // delete movie from the databasse
    const handelDelete = async () => {
        try {
            await axios.delete("/movies/" + path, {
                headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDczNDYzMCwiZXhwIjoxNjQ1MTY2NjMwfQ.E3TKGuILa-XpMdf3HMiz9plBwqxYytjhZbOG9GJCwDM"
                }
            })
            window.location.replace("/movielist")
            alert("movie deleted!")

        } catch (error) {
            alert("something went wrong wrong. unable to delete !")

        }

    }





    // update movie list only
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put("/movies/" + path, {
                title,
                limit,
                genre,
                date,

            }, {
                headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDczNDYzMCwiZXhwIjoxNjQ1MTY2NjMwfQ.E3TKGuILa-XpMdf3HMiz9plBwqxYytjhZbOG9GJCwDM"
                }
            })
            window.location.replace("/movielist")

        } catch (err) {
            alert("unable to update")
        }
    }




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
                                <h4>Update Movie</h4>
                                <form className='productForm'>
                                    <label htmlFor="">Movie Title</label><br />
                                    <input type="text" placeholder={singleMovie.title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    /><br />

                                    <label htmlFor="">Limit</label><br />
                                    <input type="number" placeholder={singleMovie.limit}
                                        onChange={(e) => setLimit(e.target.value)}
                                    />
                                    <br />

                                    <label htmlFor="">Genre</label><br />
                                    <input type="text" placeholder={singleMovie.genre}
                                        onChange={(e) => setGenre(e.target.value)}
                                    /><br />


                                    <label htmlFor="">Release Date</label><br />
                                    <input type="number" placeholder={singleMovie.year}
                                        onChange={(e) => setDate(e.target.value)}
                                    /><br />

                                    {/* <label htmlFor="">Image</label><br />
                                    <input type="file"
                                        onChange={(e) => setImg(e.target.value)}
                                    /><br /> */}


                                    {/* <label htmlFor="">Video</label><br />
                                    <input type="file"
                                        onChange={(e) => setVideo(e.target.value)}

                                    /> */}
                                </form>
                            </div>
                            {/* right side */}
                            <div className="col-md-6">
                                <div className="productImg">
                                    <img src={singleMovie.img} alt="" />
                                    <br />
                                    {/* update button */}
                                    <button onClick={handleUpdate}>Update</button>
                                    {/* delete button */}
                                    <div className="deleteButton">
                                        <button onClick={handelDelete}><DeleteOutlined style={{ color: "red", marginRight: 10 }} />Delete movie</button>
                                    </div>
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
