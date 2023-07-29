import React from 'react';
import shield_cover from '../assets/smart_home.jpg'

const Service = () => {
    return (
        <section className="overflow-hidden sm:grid grid-cols-1 lg:grid-cols-2 rounded-2xl">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24 bg-base-100">
    <div
      className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
    >
      <h2 className="text-2xl font-bold text-white md:text-3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit
      </h2>

      <p className="hidden md:mt-4 md:block text-white ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
        tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
        fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
        duis.
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

  <img
    alt="Student"
    src={shield_cover}
    className=" w-full opacity-80 h-full"
  />
</section>
    );
};

export default Service;