import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='m-14 border-4 border-sky-500 rounded-md'>
                <h1 className='text-3xl font-bold'>Question: what is the purpose of react router dom?</h1>
                <br />
                <h2 className='text-2xl'>Ans: React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React</h2>
            </div>
            <br />
            <div className='m-14 border-4 border-sky-500 rounded-md'>
                <h1 className='text-3xl font-bold'>Question: how does react context api work?</h1>
                <br />
                <h2 className='text-2xl'>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h2>
            </div>
            <br />
            <div className='m-14 border-4 border-sky-500 rounded-md'>
                <h1 className='text-3xl font-bold'>Question: what is useref in react?</h1>
                <br />
                <h2 className='text-2xl'>Ans: Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with , React will set its .current property to the corresponding DOM node whenever that node changes.</h2>
            </div>

        </div>
    );
};

export default Blog;