import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarNew = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Desktop Navigation */}
      <div className='md:flex pl-4 justify-center hidden md:block items-center gap-12 h-20 top-0 z-30 bg-[#38296B] text-white shadow-2xl'>
        <Link to='/'>Home </Link>
        <Link to='/'>Home </Link>
        <Link to='/'>Home </Link>
        <Link to='/'>Home </Link>
      </div>

      {/* Mobile Navigation */}
      <div className='flex-col md:hidden bg-opacity-90 items-center fixed navbar gap-6 top-0 z-30 bg-[#38296B] text-white shadow-2xl'>
        <div
          onClick={() => setOpen(!open)}
          className='ml-80 items-center text-white bg-[#38296B] '
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <div className={` ${open ? 'block' : 'hidden'} flex flex-col gap-12`}>
          <Link to='/'>Home </Link>
          <Link to='/'>Services </Link>
          <Link to='/'>Products </Link>
          <Link to='/'>About Us </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarNew;
