import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import "./Watch.css"
import Play from '@material-ui/icons/PlayArrow';


// this page render to watch page when user click in watch now button in home page
const Watch = () => {
    // get data from the given  url id
    const location = useLocation()
    const path = (location.pathname.split("/")[2]);

    const [watch, setWatch] = useState({})
    // get data according to id

    useEffect(() => {
        const getMove = async () => {
            try {
                const res = await axios.get("/movies/find/" + path,
                    {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDQ1NzU2OSwiZXhwIjoxNjQ0ODg5NTY5fQ.4tLs-ycRdwWidQVU9z1MWtPOi6afCoAEn-ZlY9Q82RE"
                        }
                    })
                setWatch(res.data);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        getMove();
    }, [path])


    return (
        <>
            <Navbar />
            <div className="container-fluid watch">
                <div className="row ">
                        <div className="col-md-5 left ">
                            <div className="movieImg ">
                                <img src={watch.img} alt="" />
                                <div className="icons">
                                    
                                </div>
                                <div className="movietitle text-center">{watch.title}</div>
                            </div>
                        </div>
                        <div className="col-md-6 right ">
                            <h5>Name : <span>{watch.title}</span></h5>
                            <h5>genra : <span>{watch.genre}</span></h5>
                            <h5>Release data : <span>{watch.year}</span></h5>
                            <h5>Limit : <span>+{watch.limit}</span></h5>
                            <h5>Description : <span>{watch.desc}</span></h5>
                            <button><Play/>Watch</button>
                        </div>
                        

                </div>
            </div>
        </>
    )
}

export default Watch