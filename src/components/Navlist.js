import React from "react";
import Logo from '../assets/robowaylabs.png'
import { RiArrowDropDownLine } from 'react-icons/ri';
import '../css/Navlist.css'
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-4 mb-2 text-white flex flex-col gap-2 lg:mb-24 lg:mt-6 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/">Home</Link>
      
      {/* Service Items Hover */}
      <div className="dropdown   hidden lg:block dropdown-hover mt-[2px]">
            <div className='flex'>
              <label tabIndex={0} className="text-[16px]  btn-ghost bg-transparent text-white m-1">Services</label> 
              <RiArrowDropDownLine size={'30px'}></RiArrowDropDownLine>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] text-black menu shadow bg-base-100 rounded-box w-52">
              <li><Link to='Web'><a>Web Development</a></Link></li>
              <li><Link to='mobile'><a>Mobile App Development</a></Link></li>
              <li><Link to='/services'><a>All Services</a></Link></li>
            </ul>
          </div>

      {/* Products hover for lg view */}
          <div className="dropdown hidden lg:block dropdown-hover mt-[2px]">
            <div className='flex'>
              <label tabIndex={0} className="text-[16px]  btn-ghost bg-transparent text-white m-1">Products</label> 
              <RiArrowDropDownLine size={'30px'}></RiArrowDropDownLine>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] text-black menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='Web'><a>Pixi Version 1.0</a></Link></li>
              <li><Link to='mobile'><a>Shield 52</a></Link></li>
              <li><Link to='/products'><a>All Products</a></Link></li>
            </ul>
          </div>

      <Link className="lg:hidden" to="/services">Services</Link>
      <Link className="lg:hidden" to="/products">Products</Link>
      <Link to="/">About Us</Link>
    </ul>
  );

  return (
    <div className="w-full ">
      <Navbar className="sticky fixed top-0 z-10 bg-opacity-90 w-full bg-[#38296B] top-0 z-10 lg:h-20  h-max max-w-full rounded-none px-4 py-2 border-none lg:py-0">
        <div className="flex items-center  justify-between text-white">
          {/* Logo */}
          <Link to='/'><img className="h-[120px] mb-8 hidden lg:block logo-pos  w-[120px]" src={Logo} alt="" /></Link>


          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-8 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav className="" open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
    </div>
  );
}
