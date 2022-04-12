import React, { useState, useEffect } from "react";
import "./Featured.css";
import Pause from "@material-ui/icons/PlayArrow";
import axios from "axios";
import { Link } from "react-router-dom";

const Featured = ({ type, setgenre }) => {
  const [content, setContent] = useState({});

  // random movie is generated for movies and series page
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?types=${type}`);
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <>
      <div className="container-fluid featured">
        <div className="backgroundImg">
          <img src={content.img} alt="" />
        </div>
        {type && (
          <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select
              name="genre"
              id="genre"
              onChange={(e) => setgenre(e.target.value)}
            >
              <option>Genere</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="horror">Horror</option>
              <option value="action">Action</option>
            </select>
          </div>
        )}

        <div className="Picture-text">
          <div
            className="containerData"
            data-aos="zoom-in"
            data-aos-duration="1100"
          >
            <h4>{content.title}</h4>
            <h5>
              Release data : <span>{content.year}</span>
            </h5>
            <h5>
              Age limit : <span className="limit-box">+{content.limit}</span>
            </h5>
            <h5>
              Description : <span>{content.desc}</span>
            </h5>
            <span></span>
            <Link to={`/watch/` + content._id}>
              <button className="hero-btn-play">
                <Pause />
                Play
              </button>
            </Link>
          </div>
        </div>

        {/* search field */}
        {/* <div className="searchField">
                    <input querydata={query} type="text" placeholder='Search....' onChange={(e) => setQuery(e.target.value)} />
                </div> */}
      </div>
    </>
  );
};

export default Featured;
