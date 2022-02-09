
import React from 'react';
import "./Register.css";
import { Link } from 'react-router-dom';




const Register = () => {



    return (
        <>
            <div className="container-fluid register">
                <div className='topContent'>
                <span className="navbar-brand" to="#">Ak movies</span>

                <button className='start-btnsignIn ' >
                    <Link  to="/login">Sign In</Link>
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
                                placeholder='akendra@gmail.com'
                            />
                        </div>
                        <div>
                            <label className='mt-3'>Username</label>

                            <input type="text"
                                className="form-control "
                                placeholder='akendra'
                            />
                        </div>
                        <div>
                            <label className='mt-3'>Password</label>

                            <input type="password"
                                className="form-control "
                                placeholder='password'
                            />
                        </div>
                        <button className='start-btn' >Start</button>
                        <span>Already have an account ?
                            <Link to="/login" className='link'>Sign In </Link>
                        </span>
                    </form>
                </div>

            </div>
        </>
    )
};

export default Register;
