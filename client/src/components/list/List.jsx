import React, {  useRef, useState } from 'react';
import ListItem from '../listItem/ListItem';
import ArrowBackOutlined from "@material-ui/icons/ArrowBackSharp"
import ArrowFrontOutlined from "@material-ui/icons/ArrowForward"
import "./List.css"
// react



const List = ({ list }) => {
  



    // function for  carousel 
    const listRef = useRef()
    const [slideNumber, setSlideNumber] = useState(0)
    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${200 + distance}px)`
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-100 + distance}px)`
        }
    }
    return (

        <>
            <div className=" list">
                <h2 className='list-title mb-3'>{list.title}</h2>
                <div className="wrapper">
                    <ArrowBackOutlined style={{ fontSize: 30 }} className='sliderArrow-left' onClick={() => handleClick("left")} />
                    <div className="all-items" ref={listRef}>
                        {
                            list.content.map((item, i) => (
                                <ListItem index={i} item={item} key={i} />
                            ))}

                    </div>
                    <ArrowFrontOutlined style={{ fontSize: 30 }} className='sliderArrown-right ' onClick={() => handleClick("right")} />
                </div>
            </div>
        </>
    )
};

export default List;
