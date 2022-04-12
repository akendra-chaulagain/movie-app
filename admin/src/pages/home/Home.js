import React, { useState, useEffect } from 'react';
import "./Home.css";
import axios from "axios"
import Sidebar from '../../components/sidebar/Sidebar';


const Home = () => {


    // get new users from the database
    const [newUser, setNewUser] = useState([])
    useEffect(() => {
        const getUserUser = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGM2NzllN2UzMjZjZjIzZTBmNDJhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTE2Njk5NCwiZXhwIjoxNjQ1MjUzMzk0fQ.RcftddX44lNOgQa11V_tG540dOGet0fUzoOccSs3q3s"
                    }
                    // headers: {
                    //     token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,
                    // }
                })
                setNewUser(res.data)
            } catch (error) {
                console.log(error);
            }

        }
        getUserUser();
    }, [])



    return (
        <>
            <div className="container-fluid home ">
                <div className="row">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-9">
                        <h3 className='text-center '>Current 10 members in our website </h3>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Profile Photo</th>
                                    <th scope="col">userName</th>
                                    <th scope="col">Id created date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    newUser.map((user, id) => (

                                        <tr key={id}>
                                            <td>
                                                <img src={user.profilePic || "https://cdn2.vectorstock.com/i/thumb-large/96/76/avatar-vector-32409676.jpg"} alt="avtar" />

                                            </td>
                                            <td>{user.email}</td>
                                            <td>{new Date(user.createdAt).toDateString()}</td>
                                        </tr>

                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div>



            </div>

        </>
    )
};

export default Home;
