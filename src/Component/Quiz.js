import React from 'react';


const Quiz = ({TopicDetail}) => {
    const {id,question,options,correctAnswer}= TopicDetail;
    console.log(TopicDetail)
    return (
       <div>
        <h2>ans:{correctAnswer}</h2>
     


       </div>
    );
};

export default Quiz;