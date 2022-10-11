import React from 'react';

const Quiz = ({quiz}) => {
    const {questions}= quiz.data;
    console.log(questions)
    return (
        <div>
            <h3>topi qus:{questions}</h3>
        </div>
    );
};

export default Quiz;