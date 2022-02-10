
import React,{useState,useEffect} from 'react';
import './Featured.css'
import Pause from '@material-ui/icons/PlayArrow';
import Info from '@material-ui/icons/Info';
import axios from "axios"



const Featured = ({ type }) => {
    const [content, setContent] = useState({})

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?types=${type}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDQ1NzU2OSwiZXhwIjoxNjQ0ODg5NTY5fQ.4tLs-ycRdwWidQVU9z1MWtPOi6afCoAEn-ZlY9Q82RE"
                    }
                })
                setContent(res.data[0])
            } catch (error) {
                console.log(error);
            }
        }
        getRandomContent()
    }, [type])

    return (
        <>
            <div className="container-fluid featured">
            <div className="backgroundImg">
                <img src={content.img} alt="" />
            </div>
                {type && (
                    <div className="category">
                        <span>{type === "movie" ? "Movies" : "Series"}</span>
                        <select name="genre" id="genre">
                            <option>Genere</option>
                            <option value="adventure">Adventure</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="horror">Horror</option>
                            <option value="drama">Drama</option>
                            <option value="Romance">Romance</option>
                        </select>
                    </div>
                )}

                <div className="Picture-text">
                    <img src="../images/matix-logo.jpg" alt="" />
                    <p>{content.desc} </p>
                    <button className='hero-btn-play'><Pause />Play</button>
                    <button className='hero-btn-info'><Info />Info</button>

                </div>
            </div>

        </>
    )
};

export default Featured;
