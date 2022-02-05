import React from 'react';
import ListItem from '../listItem/ListItem';
import ArrowBackOutlined from "@material-ui/icons/ArrowBackSharp"
import ArrowFrontOutlined from "@material-ui/icons/ArrowForward"

import "./List.css"



const List = () => {
    return (
        <>
            <div className="container-fluid list">
                <span className='list-title'>Continue to Watch</span>
                <div className="wrapper">
                    <ArrowBackOutlined className='sliderArrow-left' />
                    <div className="container-items">
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />

                    </div>
                    <ArrowFrontOutlined className='sliderArrown-right ' />
                </div>

            </div>
        </>
    )
};

export default List;
