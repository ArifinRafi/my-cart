import { Carousel } from "@material-tailwind/react";
import mt1 from '../assets/mt1.jpg';
import dichari1 from '../assets/dichari1.jpg';
import dichari2 from '../assets/dichari2.jpg';

export function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 2, autoplay: true }} className="relative">
      <div className="relative">
        <img src={dichari1} alt="image 1" className="h-full w-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
      <div className="relative">
        <img src={mt1} alt="image 2" className="h-full w-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
      <div className="relative">
        <img src={dichari2} alt="image 3" className="h-full w-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
    </Carousel>
  );
}
