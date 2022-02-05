
import React from 'react';
import './Featured.css'
import Pause from '@material-ui/icons/PlayArrow';
import Info from '@material-ui/icons/Info';
;


const Featured = ({ type }) => {
    return (
        <>
            <div className="container-fluid featured">
                {type && (
                    <div className="category">
                        <span>{type === "movie" ? "Movies" : "Series"}</span>
                        <select name="genra" id="genra">
                            <option>Genere</option>
                            <option value="adventure">Adventure</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="horror">Horror</option>
                            <option value="drama">Drama</option>
                            <option value="Romance">Romance</option>
                        </select>
                    </div>
                )}

                <div className="Picture-text">
                    <img src="../images/matix-logo.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quos nam repellat mollitia ducimus saepe quas dolorem consectetur voluptatibus repellendus officiis, , </p>
                    <button className='hero-btn-play'><Pause />Play</button>
                    <button className='hero-btn-info'><Info />Info</button>

                </div>
            </div>

        </>
    )
};

export default Featured;
