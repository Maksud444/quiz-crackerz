import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reachart from './Reachart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart,Bar } from 'recharts';

const Statistics = () => {
    const reacharts = useLoaderData();
    return (
        <div className='flex justify-center '>
        <LineChart width={500} height={400} data={reacharts.data}>
            <Line type="name" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
        </LineChart>
    </div>
    );
};

export default Statistics;