import React from 'react';

const Question = ({option,handleAns}) => {
    
   
    return (
        <div>
            <button onClick={() => handleAns(option)} className='mt-5 btn-quiz sm:w-100 mr-5 hover:bg-red-300'>{option}</button>
        </div>
    );
};

export default Question;