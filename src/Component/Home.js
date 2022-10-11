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
		<p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
			<button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Learn more</button>
		</div>
	</div>
</section>
        </div>
        <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8 mt-5'>
            {
                quizs.map(topic => <Topic
                key={topic.id}
                topic={topic}
                ></Topic>)
            }
        </div>
     </div>
    );
};

export default Home;