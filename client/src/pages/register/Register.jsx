
import React, { useState } from 'react';
import "./Register.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
// ReactToastify is use for alert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Register = () => {
    const [email, setEmail] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    // register user
    const handelRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/auth/register/", {
                email,
                username,
                password
            })
            toast.success("User register success !", {
                position: "top-center",
                autoClose: "2000"
            }
            );
            window.location.replace("/login")

        } catch (error) {
            toast.success("Something went wrong unable to register!", {
                position: "top-center",
                autoClose: "2000"
            }
            );
        }
    }



    return (
        <>
            <div className="container-fluid register">
                <div className='topContent'>
                    <span className="navbar-brand" to="#">Ak movies</span>

                    <button className='start-btnsignIn ' >
                        <Link to="/login">Sign In</Link>
                    </button>
                </div>

                <div className="row">
                    <div className="container-text ">
                        <h2 className="text-center mainTitle ">Unlimated movies, Tv shows , and more.</h2>
                        <h3 className='text-center'> Watch anywhere.Cancel anytime</h3>
                        <p className='text-center'>Ready to watch ? Enter your email to create or restart your membership</p>
                    </div>

                    {/* register from */}
                    <form action="" className='input-box  '>
                        <div>
                            <label >Email address</label>
                            <input type="email"
                                className="form-control mt-2"
                                placeholder='ak@gmail.com'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='mt-3'>Username</label>

                            <input type="text"
                                className="form-control"
                                placeholder='username'
                                onChange={(e) => setUserName(e.target.value)}

                            />
                        </div>
                        <div>
                            <label className='mt-3'>Password</label>

                            <input type="password"
                                className="form-control "
                                placeholder='password'
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </div>
                        <button className='start-btn' onClick={handelRegister} >Sign Up</button>
                        <span>Already have an account ?
                            <Link to="/login" className='link'>Sign In </Link>
                        </span>
                    </form>
                </div>

            </div>
            {/* ReactToastify container */}
            <ToastContainer />
        </>
    )
};

export default Register;
