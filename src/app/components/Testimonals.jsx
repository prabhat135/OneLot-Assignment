'use client'
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="slider-container bg-gray-50 p-8">
      <h2 className="text-4xl font-extrabold mt-4 mb-10">Testimonials</h2>
      <Slider ref={sliderRef} {...settings}>
        <div className="flex flex-col justify-center items-center h-64">
          <img src="Avatar_1.webp" alt="Avatar 1" className="mb-4 mx-auto h-30 sm:h-40"/>
          <p className="font-bold mt-4 p-5">“The service of OneLot is top-notch, they act fast and can provide <br/> dealers with the funds they need, when they need it.”</p>
          <div className="flex justify-center items-center">
          <p className="text-black font-bold sm:mr-4 text-sm">Mark Vergel de Dios</p>
          <p className="text-gray-500 sm:mt-0 mt-2">Owner, MVD Auto Works</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-64">
          <img src="Avatar_1.webp" alt="Avatar 1" className="mb-4 mx-auto h-30 sm:h-40"/>
          <p className="font-bold mt-4 p-5">“The service of OneLot is top-notch, they act fast and can provide <br/> dealers with the funds they need, when they need it.”</p>
          <div className="flex justify-center items-center">
          <p className="text-black font-bold sm:mr-4 text-sm">Mark Vergel de Dios</p>
          <p className="text-gray-500 sm:mt-0 mt-2">Owner, MVD Auto Works</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-64">
          <img src="Avatar_1.webp" alt="Avatar 1" className="mb-4 mx-auto h-30 sm:h-40"/>
          <p className="font-bold mt-4 p-5">“The service of OneLot is top-notch, they act fast and can provide <br/> dealers with the funds they need, when they need it.”</p>
          <div className="flex justify-center items-center">
          <p className="text-black font-bold sm:mr-4 text-sm">Mark Vergel de Dios</p>
          <p className="text-gray-500 sm:mt-0 mt-2">Owner, MVD Auto Works</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-64">
          <img src="Avatar_1.webp" alt="Avatar 1" className="mb-4 mx-auto h-30 sm:h-40"/>
          <p className="font-bold mt-4 p-5">“The service of OneLot is top-notch, they act fast and can provide <br/> dealers with the funds they need, when they need it.”</p>
          <div className="flex justify-center items-center">
          <p className="text-black font-bold sm:mr-4 text-sm">Mark Vergel de Dios</p>
          <p className="text-gray-500 sm:mt-0 mt-2">Owner, MVD Auto Works</p>
          </div>
        </div>
      </Slider>
      <div className="text-center mt-4">
        <button className=" text-gray-500 font-extrabold text-xl px-4 py-2 rounded-lg mr-2" onClick={previous}>
        <span>&larr;</span>
        </button>
        <button className="text-gray-500 font-extrabold text-xl px-4 py-2 rounded-lg mr-2" onClick={next}>
        <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
