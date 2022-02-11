
import React from 'react';
import './FeaturedInfo.css'
// import { ArrowDownward } from '@material-ui/icons';

const FeaturedInfo = () => {
    return (
        <>
            {/* exported to home page */}
            <div className="container-fluid featuredInfo">
                <div className="row ">
                    <div className="col-md-3 featuredInfo-box">
                        <h6>Revenue</h6>
                        <span >$23,900</span>
                        <p>Compared to last month</p>
                    </div>
                    <div className="col-md-3 featuredInfo-box">
                        <h6>Sales</h6>
                        <span >$465,56</span>
                        <p>Total profit this month</p>

                    </div>
                    <div className="col-md-3 featuredInfo-box">
                        <h6>Cost</h6>
                        <span >$45,764</span>
                        <p>total sale this month</p>
                    </div>
                  
                </div>
            </div>
        </>
    )
};

export default FeaturedInfo;
