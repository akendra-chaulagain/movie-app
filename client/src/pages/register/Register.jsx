
import React, { useState, useRef } from 'react';
import "./Register.css";
import { Link } from 'react-router-dom';




const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef();
    const passwordRef = useRef();


    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value)

    }
    return (
        <>
            <div className="container-fluid register">
                <div className="row">
                    <div className=" register-topbar ">
                        <img src="../images/logo.jpg" alt="" />
                        <Link to="/login">
                            <button className='signIN-btn'>Sign In</button>
                        </Link>
                    </div>
                    <div className=" container-text ">
                        <h1 className='text-center'>Unlimated movies, Tv shows , and more.</h1>
                        <h4 className='text-center'> Watch anywhere.Cancel anytime</h4>
                        <p className='text-center'>Ready to watch ? Enter your email to create or restart your membership</p>
                        {!email ? (
                            <>
                                <div className='input-box'>
                                    <input type="email" placeholder='Email address'
                                        ref={emailRef}
                                    />
                                    <button className='start-btn' onClick={handleStart}>Start</button>
                                </div>


                            </>

                        ) : (
                            <>
                                <form action="" className='input-box'>

                                    <input type="password" placeholder='Enter Password'
                                        ref={passwordRef}
                                    />
                                    <button className='start-btn' onClick={handleFinish}>Start</button>
                                </form>

                            </>

                        )
                        }


                    </div>
                </div>

            </div>
        </>
    )
};

export default Register;
