import React, { useState, useEffect } from "react";
import "./ListItem.css";
import Play from "@material-ui/icons/PlayArrow";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  const [movie, setMovie] = useState({});
  const [didMount, setDidMount] = useState(false);
  // console.log(item);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("/movies/find/" + item);
        setMovie(res.data);
        setDidMount(true);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
    return () => setDidMount(false);
  }, [item]);
  if (!didMount) {
    return null;
  }

  return (
    <>
      <div className="listItems" data-aos="zoom-in" data-aos-duration="1500">
        <img src={movie.img} alt="" />
        <div className="itemInfo">
          <div className="itrmInfoTop">
            <h6 className="text-center">{movie.title}</h6>
            <span>Duration :&#160;{movie.duration}</span>
            <br />
            <span>Genra :&#160;&#160;{movie.genre}</span>
            <br />
            {/* render to video page */}
            <Link to={`/watch/` + movie._id}>
              <button>
                <Play style={{ fontSize: 14 }} />
                watch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
