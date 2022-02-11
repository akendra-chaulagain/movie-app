import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './Home.css'
import { UserData } from '../../DummyData';
import Chart from '../../components/charts/Chart';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';



const Home = () => {
    return (
        <>
            <div className=" home">
                {/* featuredInfo import from components/featuredInfo */}
                <FeaturedInfo />

                {/*  imported from the Chart folder */}
                <Chart data={UserData} title="User Analytics" grid dataKey="Active User" />

                {/* Widget component imported from components/(widget Sm/Lg) folder */}
                <div className="container-fluid  mt-3">
                    <div className="row">
                        <div className="col-md-5 ">
                            <WidgetSm />
                        </div>
                        <div className="col-md-7 ">
                            <WidgetLg />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;
