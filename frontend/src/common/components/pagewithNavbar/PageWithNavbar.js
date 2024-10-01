import React from 'react';
import { Navbar } from '../navbar';

const PageWithNavbar = ({ children }) => {
  return (
    <div className='flex flex-row'>
      <div className='w-full fixed md:h-20 lg:h-20 h-44'>
        <Navbar />
      </div>
      <div className="flex flex-row w-full">
        <div className='w-full'>{children}</div>
      </div>
    </div>
  );
}

export default PageWithNavbar;