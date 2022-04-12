import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import "./User.css"

const User = () => {
    const [userData, setUserData] = useState({})
    const location = useLocation()
    const path = location.pathname.split("/")[2];

    // get user data by id

    useEffect(() => {
        const getUserData = async () => {
            try {
                const res = await axios.get("/users/find/" + path, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGM2NzllN2UzMjZjZjIzZTBmNDJhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTE2Njk5NCwiZXhwIjoxNjQ1MjUzMzk0fQ.RcftddX44lNOgQa11V_tG540dOGet0fUzoOccSs3q3s"
                    }
                })
                setUserData(res.data);

            } catch (error) {
                console.log(error);
            }
        }
        getUserData()
    }, [path])


    // delete account
    const handelDelete = async () => {
        try {
            await axios.delete("/users/" + path, {
                headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGM2NzllN2UzMjZjZjIzZTBmNDJhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTE2Njk5NCwiZXhwIjoxNjQ1MjUzMzk0fQ.RcftddX44lNOgQa11V_tG540dOGet0fUzoOccSs3q3s"
                }
            })
            alert("user data deleted !")
            window.location.replace("/users")

        } catch (error) {
            alert("Unable to delete !")

        }
    }


    return (
        <>
            <div className=" container-fluid user">
                <div className="row">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-9 reightSideContainer">
                        <h2 className='mt-3'>User Data</h2>
                        <div className="userdataList">
                            <h4>Username:<span>{userData.username}</span></h4>
                            <h4>Email:<span>{userData.email}</span></h4>
                            <h4>CreatedAt<span>{new Date(userData.createdAt).toDateString()}</span></h4>
                            <button onClick={handelDelete}>Delete Account</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default User