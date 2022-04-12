import React, { useState, useEffect } from "react";
import "./Home.css";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import Footer from "../../components/foooter/Footer";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setgenre] = useState(null);

  // list of movie fetch from database   or api/lists folder
  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?types=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomList();
  }, [genre, type]);

  return (
    <>
      <div className=" home">
        <Navbar lists={lists} />
        {/* featured page import from featured page  */}
        <Featured type={type} setgenre={setgenre} />

        {/* list page import from list page  */}
        {lists.map((list, key) => (
          <List list={list} key={key} />
        ))}
      </div>
      {/* fooooter */}
      <Footer />
    </>
  );
};

export default Home;
