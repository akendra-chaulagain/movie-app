import React from 'react';
import Home from "./pages/home/Home";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Error from './pages/error/Error';
import Watch from './pages/watch/Watch';
import Video from './pages/video page/Video';



const App = () => {
  const user = true;
  return (
    <>
      <Routes>
        {/* home page routes */}
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        {/* login page route import from login page */}
        <Route path="/login" element={!user ? <Login /> : <Home />} />
        {/* login page route import from Register page */}
        <Route path="/register" element={!user ? <Register /> : <Home />} />

        {/* if there is user this below page will show */}
        {
          user && (
            <>
              {/* movies page  if the type is movies it render to movies because props is given in home page */}
              <Route exact path="/movies" element={<Home type="movie" />} />
              {/* series page  if the type is series it render to movies because props is given in home page*/}
              <Route exact path="/series" element={<Home type="series" />} />
              {/* watch page = when user click watch now then it render to watch page */}
              <Route path="/watch/:id" element={<Watch/>} />
              {/* video page when user play video thgis page will run */}
              <Route path="/watch/movie" element={<Video/>} />

            </>
          )
        }
        {/* error page import from error page */}
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
};

export default App;
