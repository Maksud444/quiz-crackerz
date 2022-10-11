import React from 'react';

const Question = ({option}) => {
    console.log(option)
    return (
        <div>
            <button className='mt-5 btn-quiz sm:w-100 mr-5'>{option}</button>
        </div>
    );
};

export default Question;