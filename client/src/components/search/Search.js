import PlayArrow from "@material-ui/icons/PlayArrow";
import React from "react";
import { Link } from "react-router-dom";
import "./search.css";

const search = ({ data }) => {
  return (
    <>
      <div className="container-fluid search">
        <div className="row">
          {data?.map((item, key) => (
            <div className=" col-lg-2 col-md-5 searchContent" key={key}>
              <div
                className="searchItems mt-2"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <img src={item.img} alt="movie_img" />
                <div className="itemInfo">
                  <div className="itrmInfoTop">
                    <h6 className="text-center">{item.title}</h6>
                    <span>Duration :&#160;{item.duration}</span>
                    <br />
                    <span>Genra :&#160;&#160;{item.genre}</span>
                    <br />
                    {/* render to video page */}
                    <Link to={`/watch/` + item._id}>
                      <button>
                        <PlayArrow style={{ fontSize: 14 }} />
                        watch
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default search;
