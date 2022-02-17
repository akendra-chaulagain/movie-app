
import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import "./NewMovie.css"
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage"
import { storage } from "../../firebase";
import { createMovie } from '../../context/movieContext/apiCalls';
import { useContext } from 'react';
import { MovieContext } from "../../context/movieContext/MovieContext"


const NewMovie = () => {
    const [movie, setMovie] = useState({})
    const [img, setImg] = useState(null)
    const [video, setVideo] = useState(null)
    const [uploaded, setUploaded] = useState(0)
    const [progressBar, setprogressBar] = useState()
    const { dispatch } = useContext(MovieContext)

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value })

    }


    // upload image and video  in  firebase
    const upload = (items) => {
        items.forEach((item) => {
            const fileName = new Date().getTime() + item.label + item.file.name;
            const storageref = ref(storage, `/items/${fileName}`);
            const uploadTask = uploadBytesResumable(storageref, item.file);
            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setprogressBar(progress)

                },
                (Error) => {
                    console.log(Error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then(url => {
                            setMovie(prev => { return { ...prev, [item.label]: url } });
                        })
                    setUploaded((prev) => prev + 1)

                }

            )

        })
    }

    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            { file: img, label: "img" },
            { file: video, label: "video" },
        ])

    }

    //create movie and send to database 
    const handleSubmit = (e) => {
        e.preventDefault()
        createMovie(movie, dispatch)
    }

    //progress bar


    return (
        <>
            <div className="container-fluid newproduct">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="mewproductTitle">New Movie</div>

                        <form className="addproductForm">
                            <div className="row">
                                {/* left side */}
                                <div className="col-md-6">

                                    <div className="mt-3">
                                        <label htmlFor="">Image</label><br />
                                        <input type="file" id='img' name='img'
                                            onChange={(e) => setImg(e.target.files[0])} />
                                    </div>



                                    <div className="inputField">
                                        <label htmlFor="">Title</label><br />
                                        <input type="text" placeholder='john wick' name='title'
                                            onChange={handleChange}
                                            autoComplete="off"

                                        />
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="">Movie Username</label><br />
                                        <input type="text" placeholder='enter movie user' name='movieusername'
                                            onChange={handleChange}
                                            autoComplete="off"

                                        />
                                    </div>



                                    <div className="inputField">
                                        <label htmlFor="">Description</label><br />
                                        <input type="text" placeholder='Description' name='desc'
                                            onChange={handleChange}
                                            autoComplete="off"

                                        />
                                    </div>

                                    <div className="inputField">
                                        <label htmlFor="">Year</label><br />
                                        <input type="number" placeholder='2022' name='year'
                                            onChange={handleChange}
                                            autoComplete="off"

                                        />
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="">Genre</label><br />
                                        <input type="text" placeholder='action' name='genre'
                                            onChange={handleChange}
                                            autoComplete="off"

                                        />
                                    </div>





                                </div>
                                {/* right side */}
                                <div className="col-md-6">


                                    <div className="inputField">
                                        <label htmlFor="">Limit</label><br />
                                        <input type="number" placeholder='Age limit' name='limit'
                                            onChange={handleChange}
                                            autoComplete="off"


                                        />
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="">Duration</label><br />
                                        <input type="text" placeholder='duration' name='duration'
                                            onChange={handleChange}
                                            autoComplete="off"


                                        />
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="">Is Series?</label><br />
                                        <select name="isSeries" id="active" onChange={handleChange}>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>



                                    {/* <div className="inputField">
                                        <label htmlFor="">Video</label><br />
                                        <input type="file" name='video'
                                            onChange={(e) => setVideo(e.target.files[0])}
                                        />
                                    </div> */}

                                    {/* create btn */}
                                    <div className="createnewButton">
                                        {/* <button  onClick={handleSubmit} >Create</button> */}

                                        {uploaded === 1 ? (

                                            <div className="createButton">
                                                <button onClick={handleSubmit} >Create</button>

                                            </div>


                                        ) : (
                                            <>
                                                <button onClick={handleUpload} >Upload</button>
                                                <h2>{progressBar}</h2>


                                            </>
                                        )}
                                    </div>

                                </div>
                            </div>




                        </form>

                    </div>
                </div>

            </div>
        </>
    )
};

export default NewMovie;
