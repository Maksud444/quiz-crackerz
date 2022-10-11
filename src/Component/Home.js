import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import Topic from './Topic';

const Home = () => {
    const quizs = useLoaderData();
    return (
     <div className='m-10'>
           <div className='container bg-head'>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">
			<span className="dark:text-violet-400"></span>
		</h1>
		<p className="px-8 mt-8 mb-12 text-4xl text-white text-bold">My React site design is so beautiful that it attracts visitors easily!</p>
        <button className=''><span className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'>Contact Me</span></button>
	</div>
</section>
        </div>
        <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8 mt-5'>
            {
                quizs.data.map(topic => <Topic
                key={topic.id}
                topic={topic}
                ></Topic>)
            }
        </div>
     </div>
    );
};

export default Home;