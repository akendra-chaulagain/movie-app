import React, { useRef, useState } from 'react';
import ListItem from '../listItem/ListItem';
import ArrowBackOutlined from "@material-ui/icons/ArrowBackSharp"
import ArrowFrontOutlined from "@material-ui/icons/ArrowForward"
import "./List.css"
// react



const List = () => {


    // function for  carousel 
    const listRef = useRef()
    const [slideNumber, setSlideNumber] = useState(0)
    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

    return (
        <>
            <div className=" list">
                <h2 className='list-title mt-3'>Continue to Watch</h2>
                <div className="wrapper">
                    <ArrowBackOutlined style={{ fontSize: 40 }} className='sliderArrow-left' onClick={() => handleClick("left")} />
                    <div className="all-items" ref={listRef}>
                        {/* this all the list items are imported from the ListItem page  */}
                        <ListItem index={0}/>
                        <ListItem index={1}/>
                        <ListItem index={2}/>
                        <ListItem index={3}/>
                        <ListItem index={4}/>
                        <ListItem index={5}/>
                        <ListItem index={6}/>
                        <ListItem index={7}/>
                        <ListItem index={8}/>
                        <ListItem index={9}/>
                    </div>
                    <ArrowFrontOutlined style={{ fontSize: 40 }} className='sliderArrown-right ' onClick={() => handleClick("right")} />
                </div>

            </div>
        </>
    )
};

export default List;
