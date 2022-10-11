import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const TopicDetails = () => {
    const topic = useLoaderData();
    console.log(topic)
    return (
        <div>
            <h1 className='text-2xl'>Slelect Your Quiz</h1>
            {
                topic.data.questions.map(TopicDetail => <Quiz
                key={TopicDetail.id}
                TopicDetail={TopicDetail}
                ></Quiz>)
            }
        </div>
    );
};

export default TopicDetails;