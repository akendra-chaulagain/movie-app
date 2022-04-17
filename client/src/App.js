import React from "react";
import Home from "./pages/home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Error from "./pages/error/Error";
import Watch from "./pages/watch/Watch";
import Video from "./pages/video page/Video";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import First from "./pages/firstPage/First";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <First />} />
     
        {/* login page route import from login page */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        {/* login page route import from Register page */}
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      
        {user && (
          <>
            {/* movies page  if the type is movies it render to movies because props is given in home page */}
            <Route exact path="/movies=true" element={<Home type="movie" />} />
            {/* series page  if the type is series it render to movies because props is given in home page*/}
            <Route exact path="/series=true" element={<Home type="series" />} />
            {/* watch page = when user click watch now then it render to watch page */}
            <Route path="/watch/:id" element={<Watch />} />
            {/* video page when user play video thgis page will run */}
            <Route path="/watch/movie/:id" element={<Video />} />
            {/* video page when user play video thgis page will run */}
            <Route path="/profile/user" element={<Profile />} />
            {/*Search page */}
          </>
        )}
        {/* error page import from error page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
