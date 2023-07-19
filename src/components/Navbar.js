import React from 'react';
import {navLinks} from '../index'
import logo from '../assets/logo.svg'


const Navbar = () => {
    return (
        <nav className='w-full flex py-6 bg-black  justify-between items-center navbar bg-stone-50'>
            <img className='w-[124px] h-[124px]' src={logo} alt="" />

            <ul className='list-none flex justify-end items-center flex-1'>
                
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