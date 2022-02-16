
import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import axios from "axios"
import "./Profile.css"
import { useContext } from 'react'
import { AuthContext } from '../../authContext/Contex'





const Profile = () => {
    // const [username, setUsername] = useState({})
    // const [email, setEmail] = useState({})
    // const [password, setPassword] = useState({})
    // const { user } = useContext(AuthContext)


    // get user data





    // const handleUpdate = async (e) => {
    //     const userId = (user._id);
    //     e.preventDefault()
    //     try {
    //         const res = await axios.put(`/users/` + userId, {
    //             username,
    //             email,
    //             password
    //         }, {
    //             headers: {
    //                 token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGNiYWZmM2JjNWY2NWMwMjQ3ZGY4MSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDUwMDE2MTksImV4cCI6MTY0NTAwMTY3OX0.CRteXKoIym6-HegaUt93qNEb3ZwWfWAfFj7CaPCktVk"
    //             }
    //         })
    //         console.log(res);
    //     } catch (error) {
    //         console.log("unable to update");

    //     }


    // }

    return (
        <>
            <Navbar />
            <div className="container-fluid profile">
                <div className="row">

                    <div className=" rightSideContainer">
                        <form
                        // onSubmit={handleUpdate}
                        >
                            <h3>Update your account</h3>

                            <label htmlFor="">UserName</label>
                            <div className="inputField">
                                <input type="text" placeholder='enter your new username'
                                // onChange={(e) => setUsername(e.target.value)}
                                />

                            </div>
                            <label htmlFor="">Email</label>
                            <div className="inputField">
                                <input type="email" placeholder='enter your new email'
                                // onChange={(e) => setEmail(e.target.value)}


                                />

                            </div>
                            <label htmlFor="">Password</label>
                            <div className="inputField">
                                <input type="password" placeholder='enter your new password'
                                // onChange={(e) => setPassword(e.target.value)}

                                />
                            </div>
                            <div className="updataProfileButton">
                                <button type='submit' >Update</button>

                                <span>Delete account</span>

                            </div>

                        </form>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Profile