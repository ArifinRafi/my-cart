import React, { useContext, useState } from 'react';
import {navLinks} from '../index'
import logo from '../assets/robowaylabs.png'
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
        <div className="navbar  fixed top-0 z-30  bg-[#38296B] bg-opacity-90 text-white shadow-2xl  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu bg-blue-900  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-xl w-96">
      <Link to='/' className='btn btn-ghost'>Home</Link>
      <Link to='/About' className='btn btn-ghost'>About</Link>
      <Link to='/products' className='btn btn-ghost'>Products</Link>
      <Link to='/services' className='btn btn-ghost'>Services</Link>
        {/* <li>
          <a>Services</a>
          <ul className="p-2 ">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li> */}
      </ul>
    </div>
    <a className="btn btn-ghost hidden sm:block normal-case text-xl"><img src={logo} className='w-[140px] h-[140px] logoPosition' alt="" /></a>
    <a className="btn btn-ghost sm:hidden  mt-2 mx-16"><img src={logo} className='w-[100px] h-[120px] logoPosition' alt="" /></a>
  </div>
  <div className="navbar-center h-16 font-semibold hidden  lg:flex">
    <ul className="menu text-[18px]  menu-horizontal px-1">
      <Link to='/' className='btn btn-ghost'>Home</Link>
      <li tabIndex={0}>
        <details>
          <summary className='btn btn-ghost mt-2'>Services</summary>
          <ul className="p-2 text-black">
            <li><Link to='Web'><a>Web Development</a></Link></li>
            <li><Link to='mobile'><a>Mobile App Development</a></Link></li>
            <li><Link to='/services'><a>All Services</a></Link></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary className='btn btn-ghost mt-2' >Products</summary>
          <ul className="p-2 text-black">
            <li><a>Pixi Version 1.0</a></li>
            <li><a>Joltorongo Version 1.0</a></li>
            <li><Link to='/products'><a>All Products</a></Link></li>
          </ul>
        </details>
      </li>
      
      <Link to='/About' className='btn btn-ghost'>About</Link>
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Button</a> */}
  </div>
</div>     
    );
};

export default Navbar;