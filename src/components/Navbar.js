import React, { useState } from 'react';
import {navLinks} from '../index'
import logo from '../assets/roboway_logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import '../css/navbar.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='bg-purple-800 bg-opacity-50' >

            {/* navbar for pc view */}
        <div className='bg-opacity-40 sticky top-0 z-50 backdrop-blur-lg rounded shadow-2xl lg:w-full sm:flex hidden bg-black  navbar bg-purple-800  h-20'>

        <img className='w-[145px] h-[45px]' src={logo} alt="" />

<ul className='list-none flex justify-start px-8 items-center flex-1'>

    {navLinks.map((nav, index) => (
        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white mx-3 lg:mx-4`}>
            <a href={`${nav.id}`}>
                {nav.title}
            </a>
            
            
        </li>
    ))}
</ul>

        </div>
           {/* navbar for small devices */}
        <div className='grid sm:hidden grid-col-2'>
        <div className='grid justify-items-center '>
            <img src={logo} className='w-[200px] mobileLogo' alt="" />
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center px-5 '>
        
        <img src={toggle ? close : menu} alt="menu"
        className=' menupos w-[28px] h-[28px]  object-contain' onClick={()=> setToggle((prev)=>!prev)} />
            <div className={`${toggle ? 'flex' : 'hidden'}  bg-purple-800 bg-opacity-50 right-0 w-full fixed h-1/4  top-20 absolute  min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-start px-8 items-center flex-1'>

            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-5 lg:mx-4`}>
    <a href={`${nav.id}`}>
        {nav.title}
    </a>
    
    
                    </li>
            ))}
            </ul>
        </div>
    </div>
    </div>
   </nav>      
    );
};

export default Navbar;