import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart,Bar } from 'recharts';

const Statistics = () => {
    const reacharts = useLoaderData();
    return (
        <div className='flex justify-center '>
       
       <ResponsiveContainer width="100%" aspect={3}>
        <LineChart width={500} height={400} data={reacharts.data}>
            <Line type="name" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
        </LineChart>
        </ResponsiveContainer>
        
    </div>
    );
};

export default Statistics;