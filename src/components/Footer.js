import React from 'react';
import logo from '../assets/roboway_logo.png'
import {FaFacebook} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import {MdOutlineSettingsSuggest, MdOutlineAppShortcut} from 'react-icons/md'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-opacity-40  bg-purple-800 bg-opacity-60 text-white ">
  <div>
    <img src={logo} className='w-[218px] h-[65px]' alt="" />
    <p>All rights reserved by Roboway Technologies 2023</p>
    <div className='grid grid-cols-3'>
    <FaFacebook className='mx-[10px]' size='30px' color=''></FaFacebook>
    <FaInstagram className='mx-[10%]' size='30px' color=''></FaInstagram>
    <FaLinkedin className='mx-[10%]' size='30px' color=''></FaLinkedin>
    </div>
    
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;