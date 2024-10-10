"use client";
import React, { useState } from "react";
import { MdOutlinePlayCircle } from "react-icons/md";

export const CarouselMainPage = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative flex w-full max-h-[500px]  my-20">
      <div className="w-1/2 bg-[var(--main-color)]  flex justify-center p-5 pt-10">
        <div>
          <h2 className="text-lg md:text-2xl font-bold">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg mt-4">{slides[currentSlide].description}</p>
        </div>
      </div>

      <div className="w-1/2 relative">
        <img
          src={slides[currentSlide].image.src}
          alt={slides[currentSlide].title}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Middle Next Button */}
      <button
        onClick={handleNext}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--main-color)] text-white rounded-full p-4 hover:bg-[var(--main-color)]"
      >
        <MdOutlinePlayCircle size={25} />
      </button>

      {/* Optional Previous Button */}
    </div>
  );
};
