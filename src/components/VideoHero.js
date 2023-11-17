import React from 'react';
import videoBg from '../assets/coverVideo.mp4';
// Import your CSS file for additional styling

const VideoHero = () => {
    return (
        <div className="relative">
            <video className='w-full h-auto' src={videoBg} autoPlay loop muted></video>
            <div className='text-white absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/4 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold  text-center lg:text-left xl:text-left'>
                Welcome to roboway labs
            </div>
            <br />
            <h2 className='text-white absolute top-[420px] text-2xl left-[30px] text-center hidden lg:block lg:text-left xl:text-left'>
                We make systems for making your life easier
            </h2>
        </div>
    );
};

export default VideoHero;
