import "./Home.css";
// import { RemoveRedEye } from '@material-ui/icons';
import axios from 'axios';
import React, { useState, useEffect } from 'react';






const Home = () => {



    // get new users from the database
    const [newUser, setNewUser] = useState([])
    useEffect(() => {
        const getUserUser = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDU1OTExMiwiZXhwIjoxNjQ0OTkxMTEyfQ.DNJdey4Bk0SBaxMoui1KJ-XV6YHD6JhkuJwNG1SCtbU"
                    }
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
            <div className="container-fluid home">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className='text-center mt-2'>Current 10 members in our website </h3>

                        <table className="table mt-2">
                            <thead>
                                <tr>
                                    <th scope="col">profile</th>
                                    <th scope="col">userName</th>
                                    <th scope="col">Id created date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    newUser.map((user, id) => (

                                        <tr key={id}>
                                            <td>
                                                <img src={user.profilePic || "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651__340.png"} alt="avtar" /></td>

                                            <td>{user.username}</td>
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
