import React from "react";

("use client");


import image11 from "../assets/crosel11.jpg";
import image110 from "../assets/crosel110.jpg";

import image22 from "../assets/crosel22.jpg";
import image220 from "../assets/crosel220.jpg";

import image33 from "../assets/crosel33.jpg";
import image330 from "../assets/crosel330.jpg";
import image44 from "../assets/crosel44.jpg";
import image440 from "../assets/crosel440.jpg";

import image55 from "../assets/crosel55.jpg";
import image550 from "../assets/crosel550.jpg";

// import image3 from "../assets/crosel3.jpg";
// import image4 from "../assets/crosel4.jpg";
// import image5 from "../assets/crosel5.jpg";
// import image6 from "../assets/crosel6.jpg";

import { Carousel } from "flowbite-react";

const Crosel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-0 md:mx-4 mt-2 -z-10 md:h-64 ">
      <Carousel>
        {/* 1 */}
        <picture className="firstONE">
          <source srcSet={image11} media="(min-width: 768px)" /> {/* for bigger size*/}
          <source srcSet={image110} media="(max-width: 769px)" /> {/* for smaller size*/} 
          <img
            src={image11}
            
            alt="Responsive Image"
            className="w-full h-auto"
          />
        </picture>
        {/* 2 */}
        <picture className="firstONE">
          <source srcSet={image22} media="(min-width: 768px)" /> {/* for bigger size*/}
          <source srcSet={image220} media="(max-width: 769px)" /> {/* for smaller size*/} 
          <img
            src={image22}
            
            alt="Responsive Image"
            className="w-full h-auto"
          />
        </picture>
        {/* 3 */}
        <picture className="firstONE">
          <source srcSet={image33} media="(min-width: 768px)" /> {/* for bigger size*/}
          <source srcSet={image330} media="(max-width: 769px)" /> {/* for smaller size*/} 
          <img
            src={image33}
            
            alt="Responsive Image"
            className="w-full h-auto"
          />
        </picture>
        {/* 4 */}
        <picture className="firstONE">
          <source srcSet={image44} media="(min-width: 768px)" /> {/* for bigger size*/}
          <source srcSet={image440} media="(max-width: 769px)" /> {/* for smaller size*/} 
          <img
            src={image44}
            
            alt="Responsive Image"
            className="w-full h-auto"
          />
        </picture>
        {/* 5 */}
        <picture className="firstONE">
          <source srcSet={image55} media="(min-width: 768px)" /> {/* for bigger size*/}
          <source srcSet={image550} media="(max-width: 769px)" /> {/* for smaller size*/} 
          <img
            src={image55}
            
            alt="Responsive Image"
            className="w-full h-auto"
          />
        </picture>

      </Carousel>
    </div>
  );
};

export default Crosel;
