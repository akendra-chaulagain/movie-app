
import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./NewList.css"
import axios from 'axios'

const NewList = () => {
    const [movies, setMovies] = useState([])
    const [list, setList] = useState(null)







    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value })

    }
    // create list
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/lists", list, {
                headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDczNDYzMCwiZXhwIjoxNjQ1MTY2NjMwfQ.E3TKGuILa-XpMdf3HMiz9plBwqxYytjhZbOG9GJCwDM"
                }
            })
            alert("List item created")
            window.location.reload("/lists")
        } catch (error) {
            alert("Unable to create");
        }


    }
    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, (option) => option.value);
        setList({ ...list, [e.target.name]: value })

    }



    // get all movie movies 
    useEffect(() => {
        const getMovie = async () => {
            const res = await axios.get("/movies/", {
                headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDczNDYzMCwiZXhwIjoxNjQ1MTY2NjMwfQ.E3TKGuILa-XpMdf3HMiz9plBwqxYytjhZbOG9GJCwDM"
                }
            })
            setMovies(res.data);
        }
        getMovie()
    }, [])








    return (
        <>
            <div className="container-fluid newList">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 newlistContainer">
                        <h3 className='text-center'>Create new list</h3>
                        <form action="">
                            <div className="row">
                                <div className="col-6 leftSideContainer">
                                    <label >Title</label>
                                    <div className="inputField">
                                        <input type="text" name='title' onChange={handleChange}
                                            placeholder="Movies"
                                            autoComplete='off'

                                        />
                                    </div>

                                    <label >Genre</label>
                                    <div className="inputField">
                                        <input type="text" name='genre' onChange={handleChange}
                                            placeholder="Action"
                                            autoComplete='off'
                                        />
                                    </div>

                                    <label >Type</label>
                                    <div className="inputField">
                                        <select name="type" onChange={handleChange}>
                                            <option >Type</option>
                                            <option value="movie">Movie</option>
                                            <option value="series">Series</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-6 rightSideContainer mt-4">
                                    <label >Content</label>
                                    <div className="inputField">
                                        <select multiple name="content" onChange={handleSelect}>
                                            {movies.map((data, key) => (
                                                <option key={key} value={movies._id}>{data.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <button onClick={handleSubmit}>Create</button>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NewList