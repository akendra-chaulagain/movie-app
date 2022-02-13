
import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import "./NewMovie.css"

const NewMovie = () => {
    const [movie, setMovie] = useState({})
    const [img, setImg] = useState(null)
    const [imgTitle, setImgTitle] = useState(null)
    const [imgSm, setImgSm] = useState(null)
    const [trailer, setTrailer] = useState(null)
    const [video, setVideo] = useState(null)

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value })
    }
    console.log(img);

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
                                         onChange={e=>setImg(e.target.files[0])}/>
                                    </div>

                                    <div className="mt-2">
                                        <label htmlFor="">Title image</label><br />
                                        <input type="file" id='imgTitle' name='imgTitle' 
                                         onChange={e=>imgTitle(e.target.files[0])}/>

                                   
                                    </div>

                                    <div className="mt-2">
                                        <label htmlFor="">Thumbnail image</label><br />
                                        <input type="file" id='imgSm' name='imgSm' 
                                         onChange={e=>setImgSm(e.target.files[0])}

                                         />

                                    
                                    </div>


                                    <div className="inputField">
                                        <label htmlFor="">Title</label><br />
                                        <input type="text" placeholder='john wick' name='title'
                                            onChange={handleChange}
                                        />
                                    </div>



                                    <div className="inputField">
                                        <label htmlFor="">Description</label><br />
                                        <input type="text" placeholder='Description' name='desc'
                                            onChange={handleChange}

                                        />
                                    </div>

                                    <div className="inputField">
                                        <label htmlFor="">Year</label><br />
                                        <input type="number" placeholder='2022' name='year'
                                            onChange={handleChange}

                                        />
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="">Genre</label><br />
                                        <input type="text" placeholder='action' name='genre'
                                            onChange={handleChange}

                                        />
                                    </div>





                                </div>
                                {/* right side */}
                                <div className="col-md-6">


                                    <div className="inputField">
                                        <label htmlFor="">Limit</label><br />
                                        <input type="number" placeholder='Age limit' name='limit'
                                            onChange={handleChange}

                                        />
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="">Duration</label><br />
                                        <input type="text" placeholder='duration' name='duration'
                                            onChange={handleChange}

                                        />
                                    </div>
                                    <div className="inputField">
                                        <label htmlFor="">Is Series?</label><br />
                                        <select name="isSeries" id="active" onChange={handleChange}>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>

                                    <div className="inputField">
                                        <label htmlFor="">Trailer</label><br />
                                        <input type="file" name='trailer'
                                         onChange={e=>setTrailer(e.target.files[0])}

                                         />
                                    </div>


                                    <div className="inputField">
                                        <label htmlFor="">Video</label><br />
                                        <input type="file" name='video' 
                                         onChange={e=>setVideo(e.target.files[0])}
                                        />
                                    </div>





                                    {/* create btn */}
                                    <div className="createnewButton">
                                        <button >Create</button>
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
