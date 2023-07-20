import React from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <LoginForm></LoginForm>
            <Footer></Footer>
            
        </div>
    );
};

export default Login;