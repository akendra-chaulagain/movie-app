import React from 'react';
import Home from "./pages/home/Home";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Error from './pages/error/Error';



const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {/* home page routes */}
        <Route path="/" element={<Home />} />
        {/* login page route import from login page */}
        <Route path="/login" element={<Login />} />
        {/* login page route import from Register page */}
        <Route path="/register" element={<Register />} />
        {/* error page import from error page */}
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
};

export default App;
