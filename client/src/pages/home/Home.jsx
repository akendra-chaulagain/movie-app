import React, { useState, useEffect } from "react";
import "./Home.css";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import Footer from "../../components/foooter/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../../redux/apiCalls";
import Search from "../../components/search/Search";

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

  // get all movies
  const dispatch = useDispatch();
  useEffect(() => {
    getAllMovie(dispatch);
  }, [dispatch]);
  const movie = useSelector((state) => state.movie.movies);

  // usestate for searchh
  const [searchresult, setSearchresult] = useState("");
  const keys = ["title", "desc", "genre", "movieusername", "year", "duration"];
  const searchData = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(searchresult))
    );
  };

  return (
    <>
      <div className=" home">
        <Navbar setSearchresult={setSearchresult} />
        {/* if the user searcg then searchresult will run */}
        {searchresult ? (
          <Search data={searchData(movie)} />
        ) : (
          <>
            {/* featured page import from featured page  */}
            <Featured type={type} setgenre={setgenre} />
            {/* list page import from list page  */}
            {lists.map((list, key) => (
              <List list={list} key={key} />
            ))}
          </>
        )}
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
