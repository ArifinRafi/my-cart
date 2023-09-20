import React from 'react';
import shield_cover from '../assets/smart_home.jpg'
import {CarouselTransition} from '../components/Slider'

const Service = () => {
    return (
        <section className="overflow-hidden bg-base-200 sm:grid grid-cols-1 lg:grid-cols-2">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24 bg-base-200">
    <div
      className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
    >
      <h2 className="text-2xl font-bold text-white md:text-3xl">
        Our Achievements
      </h2>

      <p className=" md:mt-4 md:block text-white ">
        We have the most experienced people in our team who competed worldwide in different international and national competitions in previous years. Lets make the 4th Industrial Revolution together
      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="#"
          className="inline-block rounded bg-purple-800 px-12 py-3 text-sm font-medium text-white transition hover:bg-purple-700 focus:outline-none focus:ring focus:ring-yellow-400 my-12"
        >
          Let's explore with us!
        </a>
      </div>
    </div>
  </div>

  <div>
      <CarouselTransition/>
  </div>
</section>
    );
};

export default Service;