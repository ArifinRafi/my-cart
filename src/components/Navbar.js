import React, { useContext, useState } from 'react';
import {navLinks} from '../index'
import logo from '../assets/roboway_logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import '../css/navbar.css'
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [loggedIn, setloggedIn] = useState(null);
    const {user, logout} = useContext(AuthContext);
    const [toggle, setToggle] = useState(false);
    const [ShowOptions, setShowOptions] = useState(false);

    const toggleOptions =() => {
        setShowOptions(!ShowOptions);
    }


    

    const handleLogout = () => {
        logout()
        .then(()=> {})
        .catch(error => console.error(error));
    }

    return (
        <nav className='bg-purple-800 bg-opacity-50' >

            {/* navbar for pc view */}
        <div className='bg-opacity-40 fixed top-0 z-50 backdrop-blur-lg rounded shadow-2xl lg:w-full sm:flex hidden bg-black  navbar bg-purple-800  h-20'>

        <img className='w-[145px] h-[45px]' src={logo} alt="" />

<ul className='list-none flex justify-start px-8 items-center flex-1 text-white'>

   <li className='flex justify-evenly cursor-pointer text-[16px] gap-5 font-semibold'>
   <Link to='/' >Home</Link>
    <Link to='/'>Services</Link>
    
    <div className="dropdown dropdown-bottom ">
  <label tabIndex={0} className="transparent-bg">Products</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-purple-800 opacity-50 rounded-box w-52">
    <li><a>Pixi Version 1.0</a></li>
    <li><a>Shield 52</a></li>
    <li><a>Miraz 1.0</a></li>
  </ul>
</div>
    

    
    
        {/* <select
        className="transparent-bg"
        name="Products"
        id="products"
        >
        <option className="bg-purple-700" value="">Products</option>
        <option className="bg-purple-700" value="">Shield 52</option>
        <option className="bg-purple-700" value="">Miraz 1.0</option>
        </select> */}

    <Link to='/Signup'>Sign Up</Link>
    <Link to='/Login'>Login</Link>
    <Link to='/'>About</Link>
   </li> 
</ul>
{/* <p className='px-10 flex justiy-items-end'>{user?.email}</p>
<button onClick={handleLogout} className='btn bg-purple-700 text-white hover:bg-purple-600 rounded '>Log Out</button> */}
    </div>
           {/* navbar for small devices */}
        <div className='grid sm:hidden grid-col-2  '>
        <div className='grid justify-items-center'>
            <img src={logo} className='w-[200px] mobileLogo ' alt="" />
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center px-5 '>
        
        <img src={toggle ? close : menu} alt="menu"
        className=' menupos w-[28px] h-[28px]  object-contain' onClick={()=> setToggle((prev)=>!prev)} />
            <div className={`${toggle ? 'flex' : 'hidden'}   bg-purple-800 bg-opacity-50 right-0 w-full  h-2/4  top-20 absolute  min-w-[140px] rounded-xl `}>
            <ul className='list-none flex flex-col justify-start px-8 items-center flex-1'>

            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer font-semibold text-[16px] text-white mb-5 lg:mx-4`}>
    <a href={`${nav.id}`}>
        {nav.title}
    </a>
    
    
                    </li>
                
            ))}

                {/* Button for signin and signout */}
            {/* <p className='px-10 flex justiy-items-end'>{user?.email}</p>
<button onClick={handleLogout} className='btn'>Log Out</button> */}
            </ul>
            
        </div>
    </div>
    </div>
   </nav>      
    );
};

export default Navbar;