import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar'
import "./Search.css"
import axios from "axios"


const Search = () => {


    // get all movie for search content
    const [getAllMovie, setgetAllMovie] = useState([])
    useEffect(() => {
        const getMovie = async () => {
            const res = await axios.get("/movies", {
                headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2Q3MzE2MzAzZTMwOGIwYTAxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDkxNTI1NCwiZXhwIjoxNjQ1MzQ3MjU0fQ.d71O6UQkFVPDX5kl3ki-3UqclhmIcya_sHuUfbYdxdk"
                }
            })
            setgetAllMovie(res.data)
        }
        getMovie();
    }, [])

    console.log(getAllMovie);


    return (
        <>
            <Navbar />

            <div className='Searchitem'>
                <input type="text" placeholder='search movies and series' />
                <div className="itemInfo">

                    <div className="itrmInfoTop">
                        <h6 className='text-center'>title</h6>
                        <span>Duration :&#160;&#160;duration</span><br />
                        <span>Limit :&#160;&#160;limit</span><br />
                        <span>Release :&#160;&#160;year</span><br />
                        <span>Genra :&#160;&#160;genre</span><br />

                    </div>

                </div>
            </div>
        </>
    )
}

export default Search