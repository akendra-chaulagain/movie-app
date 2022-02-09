import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <>
            <div className="container-fluid login">
            <span className="navbar-brand" to="#">Ak movies</span>

                <div className="row login-form">
                    <div className=" login-input ">
                        <form className='signupInputbox'>
                            <div className="mb-3">
                                <h2 className='mt-3 mb-4'>Sign In</h2>

                                <label >Email address</label>
                                <input type="email"
                                    className="form-control mt-2"
                                    placeholder='akendra@gmail.com'
                                    required
                                />

                            </div>
                            <div className="mb-3">
                                <label >Password</label>
                                <input type="password"
                                    className="form-control mt-2"
                                    placeholder="password"
                                    required
                                />
                            </div>

                            <button type="submit" className='login-btn mt-4'>Submit</button>
                            <p className='mt-2'>New to Ak movies ?
                                <Link className='signupLink' to="/register">Sign up now</Link>
                            </p>

                            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                                <Link className='signupLink' to="https://www.netflix.com/np">Learn more.</Link>
                            </p>
                        </form>

                    </div>

                </div>
            </div>
        </>
    )
};

export default Login;
