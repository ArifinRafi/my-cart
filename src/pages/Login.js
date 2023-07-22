import React from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import robot from '../assets/robot.png'

const Login = () => {
    return (
        <div className='bg-black grid grid-cols-1 lg:grid-cols-2' >
            <div>
                <img src={robot} alt="" /></div>
           

        
        <div className='lg:my-60 lg:mx-40 card flex-shrink-0 sm:w-full max-w-xl shadow-2xl py-12 lg:py-0'> 
        <LoginForm></LoginForm> </div>
        </div>
    );
};

export default Login;