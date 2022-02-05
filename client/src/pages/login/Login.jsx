import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <>
            <div className="container-fluid login">
                <img src="../images/logo.jpg" alt="" />
                <div className="row login-form">
                    <div className="col-md-6 w-50 ml-0 mr-0 mx-auto login-input ">
                        <h2 className='mt-3'>Sign In</h2>
                        <form action="" className='mt-3'>
                            <input type="text" className='mb-3' placeholder='Email or phone number' /><br />
                            <input type="text" placeholder='password' />
                            <button className='login-btn'>Sign IN</button>
                            <p className='mt-2'>New to Netflix ?
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
