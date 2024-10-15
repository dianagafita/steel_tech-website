"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlinePlayCircle } from "react-icons/md";

export const CarouselMainPage = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex flex-col  md:flex-row w-full max-h-[500px] h-full my-20 mb-40">
      <div className="h-1/2 md:w-1/2 bg-[var(--main-color)]  flex flex-col  p-5  py-11 md:p-10 ">
        <h2 className="text-md md:text-2xl font-bold items-start">
          {slides[currentSlide].title}
        </h2>
        <p className="text-[14px] mt-10">{slides[currentSlide].description}</p>
      </div>

      <div className="h-1/2 md:w-1/2 relative">
        <Image
          priority
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="object-cover h-full w-full"
        />
      </div>
      <button
        onClick={handleNext}
        className="absolute left-1/2 top-2/3 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--main-color)] text-white rounded-full p-4 hover:bg-[var(--main-color)]"
      >
        <MdOutlinePlayCircle size={25} />
      </button>
    </div>
  );
};
