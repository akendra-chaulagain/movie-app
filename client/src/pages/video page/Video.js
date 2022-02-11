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
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDQ1NzU2OSwiZXhwIjoxNjQ0ODg5NTY5fQ.4tLs-ycRdwWidQVU9z1MWtPOi6afCoAEn-ZlY9Q82RE"
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