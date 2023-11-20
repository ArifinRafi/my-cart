import React from 'react';
import logo from '../assets/robowaylabs.png'
import {FaFacebook} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import '../css/Footer.css'
import { Link } from 'react-router-dom';
import {MdOutlineSettingsSuggest, MdOutlineAppShortcut} from 'react-icons/md'

const Footer = () => {
    return (
        <footer className="footer bg-[#38296B] pl-4 lg:h-[300px] text-white ">
  <div>
    <img src={logo} className='w-[144px]   logo-bottom  h-[144px]' alt="" /> 
    <p  className='mt-8 ml-2'>All rights reserved by Roboway Labs 2023</p>
    <div className='grid grid-cols-3'>
    <FaFacebook className='mx-[10px]' size='30px' color=''></FaFacebook>
    <FaInstagram className='mx-[10%]' size='30px' color=''></FaInstagram>
    <FaLinkedin className='mx-[10%]' size='30px' color=''></FaLinkedin>
    </div>
    
  </div> 
  <div className='mt-12' >
    <span className="footer-title">Services</span> 
    <Link className="link link-hover" to='Web'><a>Web Development</a></Link>
    <Link className="link link-hover" to='Mobile'><a>Mobile App Development</a></Link>
    <Link className="link link-hover" to='Mobile'><a>ML/AI based Development</a></Link>
    <Link className="link link-hover" to='Mobile'><a>IoT/Robotics based Solution</a></Link>
    
  </div> 

  <div className='mt-12' >
    <span className="footer-title">Products</span> 
    <Link className="link link-hover" to='Web'><a>Pixi Version 1.0</a></Link>
    <Link className="link link-hover" to='Mobile'><a>ADAAS</a></Link>
     
  </div> 

  <div className='mt-12' >
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
  </div> 
  <div className='mt-12'>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;