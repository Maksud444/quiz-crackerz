import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-indigo-500 shadow-lg shadow-indigo-500/50 m-10'>
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
          <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
      
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
              <Link to='/'>Quiz-Zone</Link>
            </span>
          </a>
          <nav className='flex flex-wrap items-center space-x-4 sm:space-x-8'>
        <Link to='/'>Topic</Link>
        <Link to='/statistics'>Statistics</Link>
        <Link to='/blog'>Blog</Link>
      </nav>
      </div>
  </header>
      </div>
    );
};

export default Header;