import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselWithContent({ slides }) {
  return (
    <Carousel className="h-[600px]">
      {slides.map((slide, index) => (
        <div key={index} className="relative h-full w-full">
          <img src={slide.imgSrc} alt={`image ${index + 1}`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {slide.title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                {slide.description}
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  {slide.exploreLabel}
                </Button>
                <Button size="lg" color="white" variant="text">
                  {slide.galleryLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
