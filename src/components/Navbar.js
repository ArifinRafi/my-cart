import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  


  return (
    <div className="navbar fixed sm:hidden lg:flex justify-center top-0 z-30 bg-[#38296B] bg-opacity-90 text-white shadow-2xl">
      <div className="lg:navbar-center sm:hidden h-16 font-semibold  lg:flex">
        <ul className="menu text-[18px] menu-horizontal px-1">
          <Link to='/' className='btn btn-ghost'>Home</Link>
          <div className="dropdown dropdown-hover mt-[9px]">
            <div className='flex'>
              <label tabIndex={0} className="text-[14px] uppercase btn-ghost bg-transparent text-white m-1">Services</label> 
              <RiArrowDropDownLine size={'30px'}></RiArrowDropDownLine>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] text-black menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='Web'><a>Web Development</a></Link></li>
              <li><Link to='mobile'><a>Mobile App Development</a></Link></li>
              <li><Link to='/services'><a>All Services</a></Link></li>
            </ul>
          </div>

          <div className="dropdown dropdown-hover mt-[9px] mx-2">
            <div className='flex'>
              <label tabIndex={0} className="text-[14px] uppercase btn-ghost bg-transparent text-white m-1">Products</label> <RiArrowDropDownLine size={'30px'}></RiArrowDropDownLine>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] text-black menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Pixi Version 1.0</a></li>
              <li><a >Shield 52</a></li>
              <li><Link to='/products'>All Products</Link></li>
            </ul>
          </div>

          <Link to='/About' className='btn btn-ghost'>About</Link>
        </ul>
        <div className="">
          <Link to='/form' className='btn btn-ghost text-white'>Fix a meeting</Link>
        </div>
      </div>

      
      <div className='grid lg:hidden grid-cols-1'>
      <Link to='/About' className='btn btn-ghost'>About</Link>
      <Link to='/About' className='btn btn-ghost'>About</Link>
      <Link to='/About' className='btn btn-ghost'>About</Link>
      </div>
      
    </div>
  );
};

export default Navbar;
