import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import "./App.css"
import Home from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from './pages/userlist/UserList'

const App = () => {
  return (
    <Router>
      <Topbar />
      <div className="containerApp">
        <Sidebar />
        <Routes>
          {/* home page */}
          <Route path='/' element={<Home/>}/>
          {/* users page */}
          <Route path='/users' element={<UserList/>}/>

        </Routes>
      </div>
    </Router>
  )
}

export default App