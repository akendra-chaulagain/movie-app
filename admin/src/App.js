import React from 'react'
import Topbar from './components/topbar/Topbar'
import "./App.css"
import Home from './pages/home/Home'
import {
  BrowserRouter as Router,

  Route,
  Routes,

} from "react-router-dom";
import UserList from './pages/userlist/UserList'
import User from './pages/user/User'
import MovieList from './pages/movieList/MovieList'
import Movie from './pages/movie/Movie'
import NewMovie from './pages/newMovie/NewMovie'
import Login from './pages/login/Login'
import { useContext } from 'react'
import { AuthContext } from "./context/authContext/Contex"
import List from './pages/list/List';
import EditList from './pages/EditList/EditList';
import NewList from './pages/newList/NewList';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Router>
        {
          user ? (
            <>
              <Topbar />
              <Routes>
                {/* home page */}
                <Route exact path='/' element={<Home />} />
                {/* user list */}
                <Route exact path='/users' element={<UserList />} />
                {/* single user page */}
                <Route exact path='/user/:id' element={<User />} />


                <Route exact path='/movielist' element={<MovieList />} />
                {/* get movie by id */}
                <Route exact path='/movie/:id' element={<Movie />} />
                {/* create new movie */}
                <Route exact path='/newMovie' element={<NewMovie />} />
                {/* lists page */}
                <Route exact path='/lists' element={<List />} />
                 {/* Edit lists page */}
                 <Route exact path='/lists/:id' element={<EditList />} />
                  {/* create new page */}
                  <Route exact path='/newList' element={<NewList />} />
              </Routes>

            </>
          ) : (
            <>
              <Routes>
                <Route  path='/login' element={<Login />} />

              </Routes>

            </>
          )
        }






      </Router>
    </>
  )
}

export default App