import React from 'react';
import adas from '../assets/adas.png';
import car_parking from '../assets/car_parking.png';
import nid from '../assets/automated_nid.png';

const Ml = () => {
  const contents = [
    {
      img: adas,
      head: 'ADAS',
      head_description: 'Advanced Driver Assistance Systems',
    },
    {
      img: nid,
      head: 'Automated NID OCR',
      head_description: 'Automated NID OCR (Optical Character Recognition)',
    },
    {
      img: car_parking,
      head: 'Smart Parking Monitoring System',
      head_description: 'A computer vision-based parking monitoring',
    },
  ];

  return (
    <div>
        <div className='flex flex-col items-center mt-24 justify-center'>
        <h1 className='text-3xl font-bold'>ML based Solutions</h1>
        <span className='text-xl mt-4 p-4 h-[200px] bg-white'>
        Experience the transformative capabilities of our Artificial Intelligence and Machine Learning solutions, specifically crafted for businesses and enterprises. Our innovative suite of offerings harnesses the power of these advanced technologies to drive optimization, efficiency, and growth across diverse industries. Whether you're seeking tailored solutions or comprehensive innovations, our expertise in Artificial Intelligence and Machine Learning ensures your enterprise is equipped to thrive in the evolving landscape of intelligent business solutions. Empower your business with cutting-edge technologies, unlocking unparalleled potential and ushering in a new era of success and competitiveness.
        </span>
        </div>
        <div className=' grid grid-cols-1 lg:grid-cols-3 text-center justify-items-center mt-[500px] lg:mt-24'>
      {contents.map((content) => (
        <div key={content.head} className='mb-8'>
          <h1 className='text-3xl mt-12'>{content.head}</h1>
          <span className='text-xl'>{content.head_description}</span>
          <div className='flex justify-center mt-4'>
            <img src={content.img} alt='' />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Ml;
