import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const TopicDetails = () => {
    const topic = useLoaderData();
    console.log(topic)
    return (
        <div>
            <h1 className='text-4xl text-bold bg-teal-200 m-auto p-6'>Select Your Correct Answer!</h1>
        <div className='grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 m-10'>
        {
                topic.data.questions.map(TopicDetail => <Quiz
                key={TopicDetail.id}
                TopicDetail={TopicDetail}
                ></Quiz>)
            }
        </div>
        </div>
    );
};

export default TopicDetails;