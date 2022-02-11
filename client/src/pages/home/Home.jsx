
import React, { useState, useEffect } from 'react';
import './Home.css'
import Featured from '../../components/featured/Featured';
import List from "../../components/list/List";
import Navbar from '../../components/navbar/Navbar';
import axios from "axios"




const Home = ({ type }) => {
  const [lists, setLists] = useState([])
  const [genre, setgenre] = useState(null)

  // list of movie fetch from database   or api/lists folder
  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(`lists${type ? "?types=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDQxNzg4MCwiZXhwIjoxNjQ0ODQ5ODgwfQ.4FDiwKDBaMYzrsudelJ8NYMM9mjWLJN3GRPGddhtVw0"
          }
        })
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getRandomList()
    return () => {

    }
  }, [genre, type])


  return (
    <>
      <div className=" home">
        <Navbar />
        {/* featured page import from featured page  */}
        <Featured type={type} />

        {/* list page import from list page  */}
        {
          lists.map((list, key) => (
            <List list={list} key={key} />

          ))
        }

      </div>

    </>
  )
};

export default Home;
