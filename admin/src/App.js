import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import "./App.css"
import Home from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from './pages/userlist/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newproduct/NewProduct'

const App = () => {
  return (
    <Router>
      <Topbar />
      <div className="containerApp">
        <Sidebar />
        <Routes>
          {/* home page */}
          <Route path='/' element={<Home />} />
          {/* users page */}
          <Route path='/users' element={<UserList />} />
          {/* single user page when click  edit button in users page*/}
          <Route path='/user/:id' element={<User />} />

          {/* new user page  */}
          <Route path='/newuser' element={<NewUser />} />
          {/* product list */}
          <Route path='/productlist' element={<ProductList />} />

          {/* individual product */}
          <Route path='/product/:id' element={<Product />} />

          {/* /newproduct */}
          {/* new product page */}
          <Route path='/newproduct' element={<NewProduct />} />


        </Routes>
      </div>
    </Router>
  )
}

export default App