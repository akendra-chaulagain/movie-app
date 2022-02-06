
import React from 'react';
import './Home.css'
import Featured from '../../components/featured/Featured';
import List from "../../components/list/List";




const Home = () => {
  return (
    <>
      <div className=" home">
      {/* featured page import from featured page  */}
        <Featured />
      {/* list page import from list page  */}
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>

    </>
  )
};

export default Home;
