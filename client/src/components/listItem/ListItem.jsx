import React, { useState } from 'react';
import './ListItem.css'
import Play from '@material-ui/icons/PlayArrow';
import Add from '@material-ui/icons/Add';
import Like from '@material-ui/icons/ThumbUp';
import Dislike from '@material-ui/icons/ThumbDown';



const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <>
      <div className='listItems'
      style={{left :isHovered && index *225}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <img src="../images/profile.jpg" alt="" />
        <div className="itemInfo">
          <div className="icons">
            <Play  className='icon'/>
            <Add className='icon' />
            <Like  className='icon'/>
            <Dislike  className='icon'/>
          </div>
          <div className="itrmInfoTop">
            <h5>1 hrs and 40 min</h5>
            <span>+12</span><br/>
            <span>Release data :2020</span>
            <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, esse!</p>
            <h5>Action</h5>
          </div>

        </div>
      </div>
    </>
  )
};

export default ListItem;
