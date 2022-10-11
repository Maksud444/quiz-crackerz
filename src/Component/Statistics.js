import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reachart from './Reachart';

const Statistics = () => {
    const reacharts = useLoaderData();
    return (
        <div>
            {
                reacharts.data.map(reachart => <Reachart
                key={reachart.id}
                reachart={reachart}
                ></Reachart>)
            }
        </div>
    );
};

export default Statistics;