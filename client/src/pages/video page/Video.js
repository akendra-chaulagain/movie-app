import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"

const Video = () => {
    const Playvideo = "https://youtu.be/rUWxSEwctFU "





    return (
        <>
            <Link to="/">Homepage</Link>
            <ReactPlayer width="100%" height="100vh" controls url={Playvideo} />

        </>
    )
}

export default Video