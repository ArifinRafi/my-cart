import React from 'react';
import { animate, motion} from 'framer-motion'
import {FaRobot, FaAndroid} from 'react-icons/fa'
import {LuBrainCircuit} from 'react-icons/lu'
import {MdOutlineSettingsSuggest, MdOutlineAppShortcut} from 'react-icons/md'
import { Link } from 'react-router-dom';

const divElement = [
    {iconImage: <MdOutlineSettingsSuggest size='40px'></MdOutlineSettingsSuggest>,
    name:'Embedded Systems ', description: 'Automate your home, factory and workplace with us'},
    {iconImage: <MdOutlineAppShortcut size='40px'></MdOutlineAppShortcut>,
    name:'Web/App based Solutions', description: 'Build your mobile application for your business for Android and IOS'},
    {iconImage: <LuBrainCircuit size='40px'></LuBrainCircuit>,
    name:'ML/AI based Solutions', description: 'Make your business online with us '}
 ]

 const colors = ['#38296B', '#38296B', '#38296B'];



const Intro = () => {
    const fadeInfromleft = {
        initial:{
            opacity:0, 
            y:100,
            
        },
        animate:{
            opacity:1, 
            y:0,
            
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
        <div className=''>
            <div className=' bg-base-200 w-full text-black lg:h-[500px] '>
            <motion.div
            variants={fadeInAnimation}
            initial='initial'
            whileInView={'animate'}>
            <h1 className='text-3xl font-bold pt-4 grid justify-center '>What we do</h1>
            <p className='grid text-lg justify-center mt-12 '>Our primary concern is to find a solution using the cutting edge technology for you</p>
            </motion.div>


{/* ServiceArea  */}

{/* <div className='grid lg:grid-cols-3 rounded-2xl text-[#38296B] grid-cols-1 my-12 justify-items-center mx-4 text-xl font-bold'>
  {divElement.map((element, index) => (
    <div key={element.name} className="card w-96 bg-base-100 shadow-xl">
      <h1 className='flex justify-center text-white h-16 pt-4' style={{backgroundColor: colors[index]}}>
        {element.name}
      </h1> <br />
    <div className='flex justify-center scale-150'>
        {element.iconImage}
    </div>

      <div className="card-body items-center text-center">
        <p>{element.description}</p>
        <div className="card-actions">
          <button className="btn btn-primary bg-[#38296B] text-white ">Learn More</button>
        </div>
      </div>
    </div>
  ))}
</div> */}
 

            <div className='grid lg:grid-cols-3 text-[#38296B] grid-cols-1 my-24  justify-items-center mx-4 text-xl font-bold'>
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




            {/* CutomerForm Button */}

            <div className='grid justify-center '><Link to='https://docs.google.com/forms/d/e/1FAIpQLSeyyc0615QhJmjN5yYj9Zl_qTj7rOi5LrPwQzHFviaId8ifJw/viewform?usp=sf_link' className='btn bg-[#38296B]  hover:bg-purple-900 text-white rounded-md grid justify-center'>Have a project? Let's discuss</Link></div>
        </div>
        </div>
    );
};

export default Intro;