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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='*' element={<Error />}/>

      </Routes>
    </>
  )
};

export default App;
