import React from 'react';
import mahbub from '../assets/mahbub.jpg'
import labib from '../assets/labib.jpg';
import { animate, motion} from 'framer-motion';

const Reviews = () => {
  const review = [{name:'Mahbub Ul Haque', comments:'They are very energectic and pationate about their work. Lets hope for the best for Roboway'}, {name:'Labib Muhannad', comments:'We took a customized solution for our business from roboway. Their service is extremely good'}, {name:'Abrarul Rohan', comments:'I came to know about through online workplace since 1 year ago. The team maintained well communication and delivered my desired solution before the deadline.'}];
  const fadeInfromRight = {
    initial:{
        opacity:0, 
        y:200,
        
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
  return (
        <motion.section class="text-neutral-700 dark:text-neutral-300 py-12 " variants={fadeInfromRight}
        initial='initial'
        whileInView={'animate'}>
  <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
    <h3 class="mb-6 text-3xl  font-bold">Testimonials</h3>
    <p class="mb-6 pb-2 md:mb-12 md:pb-0">
      Let's see what our hounorable customers say about us
    </p>
  </div>

  
  <div class="grid gap-6  text-center md:grid-cols-3">
    <div>

      {/* customer1 */}
      <div
        class="block hover:scale-110 duration-300 rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
        <div
          class="mx-auto -mt-12 w-20  overflow-hidden rounded-full border-2 border-white  dark:border-neutral-800 ">
          <img
            src={mahbub} />
        </div>
        <div class="p-6">
          <h4 class=" text-2xl font-semibold">{review[0].name}</h4>
          <p className='mb-4 text-sm'>Embedded System Engineer, Palki Motors</p>
          <hr />
          <p class="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24">
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
          They are very energectic and pationate about their work. Let's hope for the best for Roboway
          </p>
        </div>
      </div>
    </div>

    {/* customer2 */}
    <div>
      <div
        class="block hover:scale-110 duration-300 rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div class="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
        <div
          class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img
            src={labib} />
        </div>
        <div class="p-6">
          <h4 class="text-2xl font-semibold">Labib Muhannad</h4>
          <p className=' text-sm'>CEO, Eventizer Limited</p>
          <hr />
          <p class="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24">
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            We took a customized solution for our business from roboway. Their service is extremely good
          </p>
        </div>
      </div>
    </div>

    {/* customer3 */}
    <div>
      <div
        class="block hover:scale-110 duration-300 rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div class="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
        <div
          class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
        </div>
        <div class="p-6">
          <h4 class="mb-4 text-2xl font-semibold">John Smith</h4>
          <hr />
          <p class="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24">
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            I came to know about through online workplace since 1 year ago. The team maintained well communication and delivered my desired solution before the deadline. 
          </p>
        </div>
      </div>
    </div>
  </div>
</motion.section>
    );
};

export default Reviews;