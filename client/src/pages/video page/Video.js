import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useLocation } from "react-router-dom"
import axios from "axios"

const Video = () => {
    const Playvideo = "https://youtu.be/rUWxSEwctFU "


    // get data from the given  url id
    const location = useLocation()
    const path = (location.pathname.split("/")[3]);

    const [video, setVideo] = useState({})


    useEffect(() => {
        const getMove = async () => {
            try {
                const res = await axios.get("/movies/find/" + path,
                    {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2Q3MzE2MzAzZTMwOGIwYTAxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDkxNTI1NCwiZXhwIjoxNjQ1MzQ3MjU0fQ.d71O6UQkFVPDX5kl3ki-3UqclhmIcya_sHuUfbYdxdk"
                        }
                    })
                setVideo(res.data);

            } catch (error) {
                console.log(error);
            }
        }
        getMove()


    }, [path])

    console.log(video);

    return (
        <>
            <Link to="/">Homepage</Link>
            <ReactPlayer width="100%" height="100vh" controls url={Playvideo} />

        </>
    )
}

export default Video