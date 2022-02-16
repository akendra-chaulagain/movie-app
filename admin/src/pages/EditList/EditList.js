
import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./EditList.css"
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios"



const EditList = () => {
    const location = useLocation()
    const path = (location.pathname.split("/")[2]);
    const [singleList, setSingleList] = useState("")

    // usestate fro update list
    const [title, setTitle] = useState({})
    const [movie, setMovie] = useState({})
    const [genre, setGenre] = useState({})



    // get movie by id
    useEffect(() => {
        const getMovie = async () => {
            const res = await axios.get("/lists/find/" + path, {
                headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDczNDYzMCwiZXhwIjoxNjQ1MTY2NjMwfQ.E3TKGuILa-XpMdf3HMiz9plBwqxYytjhZbOG9GJCwDM"
                }
            })
            setSingleList(res.data);
        }
        getMovie()
    }, [path])

    // update list 


    const handleUpdateList = async (e) => {
        console.log(path);
        e.preventDefault();
        try {
            await axios.put("/lists/update/" + path, {
                title,
                genre,
                movie
            }, {
                headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2Q3MzE2MzAzZTMwOGIwYTAxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDkwNzQzNywiZXhwIjoxNjQ1MzM5NDM3fQ.hzXF-cCtQoB_nAwpozY7WuDYvH2w1XWAd5LpRzp0iAw"
                }
            })
            window.location.replace("/lists")
            alert("List Updated !")


        } catch (err) {
            alert("unable to update")
        }
    }


    // delete list
    const handelDelete = async (e) => {
        e.preventDefault();
        try {
            await axios.delete("/lists/" + path, {
                headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2Q3MzE2MzAzZTMwOGIwYTAxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDkwNzQzNywiZXhwIjoxNjQ1MzM5NDM3fQ.hzXF-cCtQoB_nAwpozY7WuDYvH2w1XWAd5LpRzp0iAw"
                }
                // headers: {
                //     token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,
                // }
            })
            window.location.replace("/lists")
            alert("List Deleted !")

        } catch (error) {
            alert("Unable to delete!")
        }

    }


    return (
        <>
            <div className="container-fluid editList">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 mt-4">
                        <div className="productContainerTitle">
                            <h1 >Movie</h1>
                            <Link to="/newList">
                                <button>Create</button>
                            </Link>
                        </div>


                        <div className="col-md-6 leftSideContainer">
                            <h4>Update Movie</h4>
                            <form className='ListContainer' >

                                <label htmlFor="">Movie Title</label><br />
                                <input type="text" placeholder={singleList.title}
                                    onChange={(e) => setTitle(e.target.value)}
                                /><br />

                                <label htmlFor="">Type</label><br />
                                <input type="text" placeholder={singleList.types}
                                    onChange={(e) => setMovie(e.target.value)}
                                />
                                <br />

                                <label htmlFor="">Genre</label><br />
                                <input type="text" placeholder={singleList.genre}
                                    onChange={(e) => setGenre(e.target.value)}
                                /><br />
                                <button onClick={handleUpdateList}>Update</button>
                                <button onClick={handelDelete}>Delete</button>

                            </form>

                        </div>






                    </div>
                </div>
            </div>
        </>
    )
}

export default EditList