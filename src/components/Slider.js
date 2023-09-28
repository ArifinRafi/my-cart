import React from 'react';
import { Carousel } from "@material-tailwind/react";

export function CarouselTransition({ images }) {
  return (
    <Carousel transition={{ duration: 2, autoplay: true }} className="max-h-[600px]">
      {images.map((img, index) => (
        <div key={index} className="relative ">
          <img src={img.src} alt={`image ${index + 1}`} className="h-full w-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
      ))}
    </Carousel>
  );
}
