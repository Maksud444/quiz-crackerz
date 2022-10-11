import React, { useState } from 'react';
import Question from './Question';
import './Quiz.css'
import { toast } from 'react-toastify';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';



const Quiz = ({TopicDetail}) => {
   
   
    const {id,question,options,correctAnswer}= TopicDetail;
    // console.log(TopicDetail)
    const [open, setOpen] = useState(true);
    const handleAns = (correct) => {
        if (correct === correctAnswer) {
            toast.success('curert', { autoClose: 300 })
        }
        else {
            toast.warning('incorrent!', { autoClose: 300 })
        }
    }
    return (
       <div className='quiz px-8 block w-full mt-4 py-3 font-semibold rounded-50% bg-cyan-200 text-gray-800'>
       <div className='question-section'>
                <div className='question-count'>
                    <span>Question</span>
                </div>
                <div className='flex justify-between'>
                    <h1 className='text-2xl text-black'>Question : {question}</h1>

                    <div onClick={() => setOpen(!open)} className='h-6 w-6 text-black'>
                        {open ? <EyeIcon></EyeIcon> : <EyeSlashIcon></EyeSlashIcon>}
                    </div>
                </div>
                <div className={open ? 'hidden' : 'block'}>
                    <h1 className='text-xl py-2 bg-white px-2 rounded-sm my-5'>
                        <span className='text-red-500 text-2xl'> Ans : </span>
                        {correctAnswer}
                    </h1>
                </div>
            </div>
        <div className='answer-section'>
            {
                options.map(option => <Question
                option={option}
                handleAns={handleAns}
                ></Question>)
            }
        </div>

       </div>
    );
};

export default Quiz;