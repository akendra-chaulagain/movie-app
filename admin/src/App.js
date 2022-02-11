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
import React from 'react';


const App = () => {
  

  return (
    <>
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>

          {/* routers */}
          <div className="col-9">
            <Routes>
              {/* home page  */}
              <Route exact path='/' element={<Home />} />
              {/* user page import from pages/userlist */}
              <Route exact path='/users' element={<UserList />} />
              {/* single user from user page */}
              <Route exact path='/user/:userId' element={<User />} />
              {/*new user page => when some one click in create button in user/User.js it render to new User page */}
              <Route exact path='/newuser' element={<NewUser />} />
              {/* product page import from   from productlist page*/}
              <Route exact path='/movies' element={<ProductList />} />
              {/* single product from product page */}
              <Route exact path='/product/:userId' element={<Product />} />
              {/* new product from newProduct page */}
              <Route exact path='/newproduct' element={<NewProduct />} />

            </Routes>
          </div>


        </div>
      </div>
    </>
  )
};

export default App;

