import React from 'react';
import { animate, motion} from 'framer-motion'
import {FaRobot, FaAndroid} from 'react-icons/fa'
import {LuBrainCircuit} from 'react-icons/lu'
import {MdOutlineSettingsSuggest, MdOutlineAppShortcut} from 'react-icons/md'

const divElement = [
    {iconImage: <MdOutlineSettingsSuggest size='40px'></MdOutlineSettingsSuggest>,
    name:'Embedded Systems '},
    {iconImage: <MdOutlineAppShortcut size='40px'></MdOutlineAppShortcut>,
    name:'Web/App based Solutions'},
    {iconImage: <LuBrainCircuit size='40px'></LuBrainCircuit>,
    name:'ML/AI based Solutions'}
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
            <div className=' bg-base-300 w-full text-white lg:h-[450px] '>
            <motion.div
            variants={fadeInAnimation}
            initial='initial'
            whileInView={'animate'}
            >
            <h1 className='text-3xl font-bold grid justify-center '>What we do</h1>
            <p className='grid text-lg justify-center mt-12 '>Our primary concern is to find a solution using the cutting edge technology for you</p>
            </motion.div>

            <div className='grid lg:grid-cols-3 grid-cols-1 my-24  justify-items-center mx-4 text-xl font-bold'>
                {divElement.map((divElement)=> (
                    <motion.div variants={fadeInfromleft} key={divElement.name}
                    initial='initial'
                    whileInView={'animate'}
                    //use viewport={{once:ture}}
                    ><div className='grid grid-cols-2 justify-items-center'>
                        <div className='mx-0'>
                         {divElement.iconImage} 
                        </div>
                        <div className='my-1'>
                         {divElement.name}  
                        </div>
                    
                       
                    </div>
                    </motion.div>

                ))}
            </div>

            <div className='grid justify-center py-4'><button className='btn bg-purple-800  hover:bg-purple-900 text-white rounded-md grid justify-center'>Have a project? Let's discuss</button></div>
        </div>
        </div>
    );
};

export default Intro;