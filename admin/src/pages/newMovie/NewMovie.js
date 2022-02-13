
import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import "./NewMovie.css"

const NewMovie = () => {
    return (
        <>
            <div className="container-fluid newproduct">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="mewproductTitle">New User</div>
                        <form className="addproductForm">

                            <div className="mt-5">
                                <label htmlFor="">Image</label><br />
                                <input type="file" id='file' />
                            </div>


                            <div className="inputField">
                                <label htmlFor="">Name</label><br />
                                <input type="text" placeholder='Mobile' />
                            </div>



                            <div className="inputField">
                                <label htmlFor="">Stock</label><br />
                                <input type="number" placeholder='157' />
                            </div>


                            <div className="inputField">
                                <label htmlFor="">Active</label><br />
                                <select name="active" id="active">
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                            </div>
                            {/* create btn */}
                            <div className="createnewButton">
                                <button >Create</button>
                            </div>


                        </form>

                    </div>
                </div>

            </div>
        </>
    )
};

export default NewMovie;
