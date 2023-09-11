import React from 'react';
import { animate, motion} from 'framer-motion'
import {FaRobot, FaAndroid} from 'react-icons/fa'
import {LuAppWindow} from 'react-icons/lu'

const divElement = [
    {iconImage: <FaRobot size='40px' color=''></FaRobot>,
    name:'Providing Embedded solutions'},
    {iconImage: <FaAndroid size='40px'></FaAndroid>,
    name:'Providing Embedded solutions'},
    {iconImage: <LuAppWindow size='40px'></LuAppWindow>,
    name:'Providing Embedded solutions'}
    
    
    
    
]


const Intro = () => {
    const fadeInfromleft = {
        initial:{
            opacity:0, 
            y:100,
            x:-200
        },
        animate:{
            opacity:1, 
            y:0,
            x:0,
        transition:{ 
            delay: 0.20, 
            duration: 1   
        } ,
    }
    }

    const fadeInAnimation = {
        initial:{
            opacity:0, 
        },
        animate:{
            opacity:1, 
        transition:{ 
            delay: 0.05, 
            duration: 1   
        } ,
    }
    }

    
    
    return (
        <div className='px-4'>
            <div className=' bg-slate-900 w-full text-white lg:h-[450px] '>
            <motion.div
            variants={fadeInAnimation}
            initial='initial'
            whileInView={'animate'}
            >
            <h1 className='text-3xl font-bold grid justify-center '>What we do</h1>
            <p className='grid text-lg justify-center mt-12 '>Our primary concern is to find a solution using the cutting edge technology for you</p>
            </motion.div>

            <div className='lg:flex my-24  justify-between mx-4 text-xl font-bold'>
                {divElement.map((divElement)=> (
                    <motion.div variants={fadeInfromleft} key={divElement.name}
                    initial='initial'
                    whileInView={'animate'}
                    //use viewport={{once:ture}}
                    ><div className='flex justify-center'>
                        <div className='mx-4'>
                         {divElement.iconImage} 
                        </div>
                        <div className='my-2'>
                         {divElement.name}  
                        </div>
                    
                       
                    </div>
                    </motion.div>

                ))}
            </div>

            <div className='grid justify-center py-4'><button className='btn btn-primary grid justify-center'>Have a project? Let's discuss</button></div>
        </div>
        </div>
    );
};

export default Intro;