import React from 'react';
import SignUpForm from '../components/SignUpform';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import robot from '../assets/robot.png'

const Login = () => {
    return (
        <div className='bg-black grid grid-cols-1 lg:grid-cols-2' >
            <div>
                <img src={robot} alt="" /></div>
           

        
        <div className=' lg:mx-40 card flex-shrink-0 sm:w-full max-w-xl shadow-2xl  lg:py-12'> 
        <SignUpForm></SignUpForm> </div>
        </div>
    );
};

export default Login;