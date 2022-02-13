import React, { useState } from 'react'
import { useContext } from 'react'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/authContext/Contex'
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { dispatch } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        loginCall({ email, password }, dispatch)
    }

    return (
        <>
            <div className="login">
                <form action="" className="loginform" >
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />


                    <button type='submit' onClick={handleSubmit}>Log In</button>

                </form>

            </div>
        </>
    )
}

export default Login