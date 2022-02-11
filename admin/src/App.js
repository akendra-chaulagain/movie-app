import React, { useContext } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/siderbar/Sidebar';
import UserList from './pages/userlist/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import { AuthContext } from './context/authContext/AuthContext';


const App = () => {

  // const {  user } = useContext(AuthContext)
  const user = false
  return (
    <>

      <Topbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/users' element={<UserList />} />
        <Route exact path='/user/:userId' element={<User />} />

        <Route exact path='/newuser' element={<NewUser />} />
        <Route exact path='/Movies' element={<ProductList />} />
        <Route exact path='/product/:userId' element={<Product />} />
        <Route exact path='/newproduct' element={<NewProduct />} />


        <Route path="/login" element={user ? <Home /> : <Login />} />

      </Routes>


    </>
  )

};

export default App;

