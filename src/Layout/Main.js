import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { StickyNavbar } from '../components/Navlist';

const Main = () => {
    return (
        <div>
            <StickyNavbar />
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;