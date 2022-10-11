import React, { useState } from 'react';
import Question from './Question';
import './Quiz.css'
const Quiz = ({TopicDetail}) => {
   
    const {id,question,options,correctAnswer}= TopicDetail;
    console.log(TopicDetail)
    return (
       <div className='quiz px-8 block w-full mt-4 py-3 font-semibold rounded-50% bg-cyan-200 text-gray-800'>
       <div className='question-section'>
        <div className='question-count'>
            <span>Question</span>
        </div>
        <div className='question-text'>
           <h4>{question}</h4>
        </div>
       </div>
        <div className='answer-section'>
            {
                options.map(option => <Question
                option={option}
                ></Question>)
            }
        </div>

       </div>
    );
};

export default Quiz;