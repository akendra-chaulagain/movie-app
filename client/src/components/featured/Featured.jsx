
import React, { useState, useEffect } from 'react';
import './Featured.css'
import Pause from '@material-ui/icons/PlayArrow';
import axios from "axios"
import { Link } from "react-router-dom"



const Featured = ({ type, setgenre }) => {
    const [content, setContent] = useState({})

    // random movie is generated fro movies and series page
    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?types=${type}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2Q3MzE2MzAzZTMwOGIwYTAxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDkxNTI1NCwiZXhwIjoxNjQ1MzQ3MjU0fQ.d71O6UQkFVPDX5kl3ki-3UqclhmIcya_sHuUfbYdxdk"
                    }
                })
                setContent(res.data[0])
            } catch (error) {
                console.log(error);
            }
        }
        getRandomContent()
    }, [type])
    // console.log(content);
    return (
        <>
            <div className="container-fluid featured">
                <div className="backgroundImg">
                    <img src={content.img} alt="" />
                </div>
                {type && (
                    <div className="category">
                        <span>{type === "movie" ? "Movies" : "Series"}</span>
                        <select name="genre" id="genre" onChange={(e) => setgenre(e.target.value)}>
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
                    <h4>{content.title}</h4>
                    <h5>genra : <span>{content.genre}</span></h5>
                    <h5>Release data : <span>{content.year}</span></h5>
                    <h5>Age limit : <span className='limit-box'>+{content.limit}</span></h5>
                    <h5>Description : <span>{content.desc}</span></h5>
                    <span></span>
                    <Link to={`/watch/` + content._id}>
                        <button className='hero-btn-play'><Pause />Play</button>
                    </Link>


                </div>
            </div>

        </>
    )
};

export default Featured;
