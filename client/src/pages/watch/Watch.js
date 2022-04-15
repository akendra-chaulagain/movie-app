import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Watch.css";
import Play from "@material-ui/icons/PlayArrow";
import Footer from "../../components/foooter/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../../redux/apiCalls";
import Search from "../../components/search/Search";

// this page render to watch page when user click in watch now button in home page
const Watch = () => {
  // get data from the given  url id
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [watch, setWatch] = useState({});

  useEffect(() => {
    const getMove = async () => {
      try {
        const res = await axios.get("/movies/find/" + path);
        setWatch(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMove();
  }, [path]);

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
      <Navbar setSearchresult={setSearchresult} />
      {searchresult ? (
        <Search data={searchData(movie)} />
      ) : (
        <>
          <div className="container-fluid watch">
            <div className="row ">
              <div className="col-md-5 left ">
                <div className="movieImg ">
                  <img src={watch.img} alt="" />

                  <div className="movietitle text-center">{watch.title}</div>
                </div>
              </div>
              <div className="col-md-6 right ">
                <h5>
                  Name : <span>{watch.title}</span>
                </h5>
                <h5>
                  genra : <span>{watch.genre}</span>
                </h5>
                <h5>
                  Release data : <span>{watch.year}</span>
                </h5>
                <h5>
                  Limit : <span className="limit-box">+{watch.limit}</span>
                </h5>
                <h5>
                  Description : <span>{watch.desc}</span>
                </h5>
                <Link to={`/watch/movie/` + path}>
                  <button>
                    <Play />
                    Watch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default Watch;
