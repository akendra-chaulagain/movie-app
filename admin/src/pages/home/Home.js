import React, { useState, useEffect } from 'react';
import "./Home.css";
import axios from "axios"

const Home = () => {



    // get new users from the database
    const [newUser, setNewUser] = useState([])
    useEffect(() => {
        const getUserUser = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDcxNDg3OSwiZXhwIjoxNjQ1MTQ2ODc5fQ.4MTvMQdupcXml48XwYeUUm1v6FXyEN3bbNWcOGSfz0g"
                    }
                })
                setNewUser(res.data)
            } catch (error) {
                console.log(error);
            }

        }
        getUserUser();
    }, [])

    console.log(newUser);


    return (
        <>
            <div className="home ">

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

        </>
    )
};

export default Home;
