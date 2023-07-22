import React from 'react';
import {navLinks} from '../index'
import logo from '../assets/roboway_logo.png'


const Navbar = () => {
    return (
        <nav className='bg-opacity-40 sticky top-0 z-50 backdrop-blur-lg rounded shadow-2xl   w-full flex  bg-black  justify-between items-center navbar bg-purple-800 w-full h-20'>
            <img className='w-[144px] h-[50px]' src={logo} alt="" />

            <ul className='list-none flex justify-start px-10 items-center flex-1'>
                
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}>
                            <a href={`${nav.id}`}>
                                {nav.title}
                            </a>
                           
                            
                        </li>
                    ))}
            </ul>
        </nav>
        
    
        
        
    );
};

export default Navbar;