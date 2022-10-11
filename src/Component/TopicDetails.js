import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const TopicDetails = () => {
    const topic = useLoaderData().data;
    console.log(topic)
    return (
        <div>
            {
                topic.map(quiz => <Quiz
                key={quiz.id}
                quiz={quiz.data}
                ></Quiz>)
            }
        </div>
    );
};

export default TopicDetails;