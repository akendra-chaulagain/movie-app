import React, { useContext, useState } from 'react'
import './Login.css'
import { AuthContext } from "../../context/authContext/AuthContext"
import { login } from '../../context/apiCalls'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { dispatch } = useContext(AuthContext)


  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch)
    
  }

  return (
    <>
      <div className="login">
        <form onSubmit={handleLogin} className="loginForm">
          <h3>Sign In</h3>
          <input type="email"
            placeholder='email'
            className='loginEmail'
            onChange={e => setEmail(e.target.value)}

          />
          <input type="password"
            placeholder='password'
            className='loginEmail'
            onChange={e => setPassword(e.target.value)}

          />
          <button type='submit'>Log In</button>
        </form>
      </div>
    </>
  )
}

export default Login




// const { dispatch, user } = useContext(AuthContext)
// return (
//   <>

//     <div className="container-fluid">
//       <div className="row">
//         {
//           user ? (
//             <>
//               <Topbar />

//               <div className="col-3">
//                 <Sidebar />
//               </div>

//               <div className="col-9">
//                 <Routes>
//                   <Route exact path='/' element={user ? <Home /> : <Login />} />
//                   <Route exact path='/users' element={<UserList />} />
//                   <Route exact path='/user/:userId' element={<User />} />
                 
//                   <Route exact path='/newuser' element={<NewUser />} />
//                   <Route exact path='/Movies' element={<ProductList />} />
//                   <Route exact path='/product/:userId' element={<Product />} />
//                   <Route exact path='/newproduct' element={<NewProduct />} />
//                 </Routes>
//               </div>
//             </>
//           ) : (
//             <>
//               <Routes>
//                 <Route path="/login" element={<Login />} />

//               </Routes>

//             </>
//           )
//         }



//       </div>
//     </div>
