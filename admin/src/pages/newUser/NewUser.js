
import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './NewUser.css'

const NewUser = () => {
    return (
        <>
            <div className="container-fluid newUser">
                <div className="row">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-9">
                        <div className="mewuserTitle">New User</div>
                        <form className='newUser-input-container'>

                            <div className=" newuserLeft">
                                <div className="inputField">
                                    <label htmlFor="">Username</label><br />
                                    <input type="text" placeholder='akendra' />
                                </div>
                                <div className="inputField">
                                    <label htmlFor="">Email</label><br />
                                    <input type="email" placeholder='akendra@gmail.com' />
                                </div>
                                <div className="inputField">
                                    <label htmlFor="">Phone</label><br />
                                    <input type="text" placeholder='987566567' />
                                </div>

                                <div className="inputField">
                                    <label htmlFor="">Active</label><br />
                                    <select name="active" id="active">
                                        <option value="yes">yes</option>
                                        <option value="no">no</option>
                                    </select>
                                </div>
                            </div>



                            <div className=" newuserRight">
                                <div className="inputField">
                                    <label htmlFor="">Full Name</label><br />
                                    <input type="text" placeholder='Akendra Chaulagain' />
                                </div>
                                <div className="inputField">
                                    <label htmlFor="">Password</label><br />
                                    <input type="password" placeholder='password' />
                                </div>
                                <div className="inputField">
                                    <label htmlFor="">Address</label><br />
                                    <input type="text" placeholder='Tikapur kailali' />
                                </div>
                                <div className="inputField">
                                    <label htmlFor="">Address</label><br />
                                    <input type="text" placeholder='Tikapur kailali' />
                                </div>

                                <div className="newUserButton">
                                    <button >Create</button>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
};

export default NewUser;
