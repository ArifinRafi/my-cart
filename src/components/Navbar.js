import React from 'react';
import {navLinks} from '../index'
import logo from '../assets/roboway_logo.png'


const Navbar = () => {
    return (
        <nav className='bg-opacity-40 sticky top-0 z-50 backdrop-blur-lg rounded shadow-2xl lg:w-full flex  bg-black   navbar bg-purple-800  h-20'>
            <img className='w-[144px] h-[50px]' src={logo} alt="" />

            <ul className='list-none flex justify-start px-8 items-center flex-1'>
                
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white mx-3 lg:mx-4`}>
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