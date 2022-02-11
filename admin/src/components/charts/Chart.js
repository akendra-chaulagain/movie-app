
import React from 'react';
import './Chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = ({ title, data, dataKey, grid }) => {

    return (
        <>
            {/* export in the  comnponents/FeaturedInfo */}
            <div className="container-fluid chart">
                <h4 className='mt-3 ' >{title}</h4>
                <ResponsiveContainer width="100%" height="100%" aspect={4 / 1} >
                    {/* width="100%" aspect={4 / 1} */}
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke='#5550bd' />
                        {/* <YAxis /> */}
                        <Line type="monotone" dataKey={dataKey} stroke='#5550bd' />
                        <Tooltip />
                        {grid && <CartesianGrid strokeDasharray=" 5 5" />}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    )
};

export default Chart;
