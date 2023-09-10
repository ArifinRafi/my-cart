import React from 'react';
import {motion} from 'framer-motion'

const Intro = () => {
    return (
        <div className='px-3'>
            <div className=' bg-slate-900 w-full text-white h-[450px] '>
            <h1 className='text-3xl font-bold grid justify-center '>What we do</h1>
            <p className='grid text-lg justify-center mt-12 '>Our primary concern is to find a solution using the cutting edge technology for you</p>

            <div className='flex my-24  justify-between mx-4 text-xl font-bold'>
                <div className=''>Providing Embedded System solutions</div>
                <motion.div
                initial={{opacity:0, x:100}}
                animate={{opacity:1, x:0}}
                transition={{duration:2}}
                
                >Providing Embedded System solutions</motion.div>
                <div>Providing Embedded System solutions</div>
            </div>

            <div className='grid justify-center my-24'><button className='btn btn-primary grid justify-center'>Have a project? Let's discuss</button></div>
        </div>
        </div>
    );
};

export default Intro;