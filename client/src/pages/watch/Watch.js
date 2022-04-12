import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import "./Watch.css"
import Play from '@material-ui/icons/PlayArrow';
import Footer from "../../components/foooter/Footer"


// this page render to watch page when user click in watch now button in home page
const Watch = () => {
    // get data from the given  url id
    const location = useLocation()
    const path = (location.pathname.split("/")[2]);

    const [watch, setWatch] = useState({})


    useEffect(() => {
        const getMove = async () => {
            try {
                const res = await axios.get("/movies/find/" + path, {
                  headers: {
                    token:
                      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGM2NzllN2UzMjZjZjIzZTBmNDJhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTcyNDg5NywiZXhwIjoxNjQ5ODExMjk3fQ.2Ztva5v8XHF905xTK7Jxex8VLKwTDQ9WYPLXy5q3aY0",
                  },
                });
                setWatch(res.data);

            } catch (error) {
                console.log(error);
            }
        }
        getMove()


    }, [path])

    // console.log(watch);
    return (
        <>
            <Navbar />
            <div className="container-fluid watch">
                <div className="row ">
                    <div className="col-md-5 left ">
                        <div className="movieImg ">
                            <img src={watch.img} alt="" />
                           
                            <div className="movietitle text-center">{watch.title}</div>
                        </div>
                    </div>
                    <div className="col-md-6 right ">
                        <h5>Name : <span>{watch.title}</span></h5>
                        <h5>genra : <span>{watch.genre}</span></h5>
                        <h5>Release data : <span>{watch.year}</span></h5>
                        <h5>Limit : <span className='limit-box'>+{watch.limit}</span></h5>
                        <h5>Description : <span>{watch.desc}</span></h5>
                        <Link to={`/watch/movie/` + path}>
                            <button><Play />Watch</button>

                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Watch