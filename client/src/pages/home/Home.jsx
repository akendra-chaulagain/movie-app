
import React from 'react';
import './Home.css'
import Featured from '../../components/featured/Featured';
import List from "../../components/list/List";




const Home = () => {
  return (
    <>
      <div className=" home">
        <Featured />
        <List />
      </div>

    </>
  )
};

export default Home;
