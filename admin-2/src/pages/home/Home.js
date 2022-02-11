import React from 'react';
import "./Home.css";


const Home = () => {



    // get new users from the database
    // const [newUser, setNewUser] = useState([])
    // useEffect(() => {
    //     const getUserUser = async () => {
    //         try {
    //             const res = await axios.get("/users?new=true", {
    //                 headers: {
    //                     token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDU1OTExMiwiZXhwIjoxNjQ0OTkxMTEyfQ.DNJdey4Bk0SBaxMoui1KJ-XV6YHD6JhkuJwNG1SCtbU"
    //                 }
    //             })
    //             setNewUser(res.data)
    //         } catch (error) {
    //             console.log(error);
    //         }

    //     }
    //     getUserUser();
    // }, [])




    return (
        <>
            <div className="home ">

                <h3 className='text-center '>Current 10 members in our website </h3>

                <table className="table">
                    <thead>
                        <tr>

                            <th scope="col">userName</th>
                            <th scope="col">Id created date</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>akendra chaulagain</td>
                            <td>akendra@gmail.com</td>
                        </tr>
                        <tr>
                            <td>akendra chaulagain</td>
                            <td>akendra@gmail.com</td>
                        </tr>
                        <tr>
                            <td>akendra chaulagain</td>
                            <td>akendra@gmail.com</td>
                        </tr>
                        <tr>
                            <td>akendra chaulagain</td>
                            <td>akendra@gmail.com</td>
                        </tr>
                        <tr>
                            <td>akendra chaulagain</td>
                            <td>akendra@gmail.com</td>
                        </tr>
                        <tr>
                            <td>akendra chaulagain</td>
                            <td>akendra@gmail.com</td>
                        </tr>
                        <tr>
                            <td>akendra chaulagain</td>
                            <td>akendra@gmail.com</td>
                        </tr>
                        <tr>
                            <td>akendra chaulagain</td>
                            <td>akendra@gmail.com</td>
                        </tr>

                    </tbody>
                </table>

            </div>

        </>
    )
};

export default Home;
