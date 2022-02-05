
import React from 'react';
import Navbar from  "../../components/navbar/Navbar";
import './Home.css'
import Featured from '../../components/featured/Featured';
import Register from '../register/Register';
// import List from '../components/list/List';




const Home = () => {
  return (
    <>
      <div className=" home">
        {/* <Navbar /> */}
        {/* <Featured /> */}
        {/* <List />
        <List />
        <List />
        <List /> */}
        <Register/>
      </div>

    </>
  )
};

export default Home;
