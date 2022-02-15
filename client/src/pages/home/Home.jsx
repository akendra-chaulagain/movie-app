
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
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2Q3MzE2MzAzZTMwOGIwYTAxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDkxNTI1NCwiZXhwIjoxNjQ1MzQ3MjU0fQ.d71O6UQkFVPDX5kl3ki-3UqclhmIcya_sHuUfbYdxdk"
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
        <Featured type={type} setgenre={setgenre}/>

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
