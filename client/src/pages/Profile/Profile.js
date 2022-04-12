
import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import axios from "axios"
import "./Profile.css"

import Footer from "../../components/foooter/Footer"
import { useLocation } from 'react-router-dom'
// ReactToastify is use for alert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const Profile = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const location = useLocation()
    const path = location.pathname.split("/")[3];






    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            await axios.put(
              `/users/` + path,
              {
                username,
                email,
                password,
              },
              {
                headers: {
                  token:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGM2NzllN2UzMjZjZjIzZTBmNDJhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTcyNDg5NywiZXhwIjoxNjQ5ODExMjk3fQ.2Ztva5v8XHF905xTK7Jxex8VLKwTDQ9WYPLXy5q3aY0",
                },
              }
            );
            window.location.replace("/")
            toast.success("Your data updated", {
                position: "top-center",
                autoClose: "2000"
            }
            );
        } catch (error) {
            toast.success("Unable to update your data! try again", {
                position: "top-center",
                autoClose: "2000"
            }
            );

        }
    }


    // delete account

    const handleDelete = async () => {
        try {
            await axios.delete("/users/" + path, {
              headers: {
                token:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGM2NzllN2UzMjZjZjIzZTBmNDJhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTcyNDg5NywiZXhwIjoxNjQ5ODExMjk3fQ.2Ztva5v8XHF905xTK7Jxex8VLKwTDQ9WYPLXy5q3aY0",
              },
            });
            window.location.replace("/register")
            toast.success("Account delete success..", {
                position: "top-center",
                autoClose: "2000"
            }
            );

        } catch (error) {
            toast.success("Unable to delete account ! try  again.", {
                position: "top-center",
                autoClose: "2000"
            }
            );

        }
    }



    return (
        <>
            <Navbar />
            <div className="container-fluid profile">
                <div className="row">

                    <div className=" rightSideContainer">
                        <form
                        >
                            <h3>Update your account</h3>

                            <label htmlFor="">UserName</label>
                            <div className="inputField">
                                <input type="text" placeholder='enter your new username'
                                    onChange={(e) => setUsername(e.target.value)}
                                />

                            </div>
                            <label htmlFor="">Email</label>
                            <div className="inputField">
                                <input type="email" placeholder='enter your new email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    required


                                />

                            </div>
                            <label htmlFor="">Password</label>
                            <div className="inputField">
                                <input type="password" placeholder='enter your new password'
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                            </div>
                            <div className="updataProfileButton">
                                <button type='submit' onClick={handleUpdate}>Update</button>

                                <span onClick={handleDelete}>Delete account</span>

                            </div>

                        </form>
                    </div>

                </div>
            </div>

            <Footer />
            {/* {/* ReactToastify container */}
            <ToastContainer />
        </>
    )
}

export default Profile