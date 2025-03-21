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
    <div className="relative flex flex-col md:flex-row w-full h-[700px] md:max-h-[500px] md:min-h-[400px] md:h-[500px]  my-20">
      <div className="h-1/2 w-full md:h-full md:w-1/2 bg-[var(--main-color)]  flex flex-col justify-center p-5 py-10">
        <h2 className="text-md md:text-xl font-bold">
          {slides[currentSlide].title}
        </h2>
        {slides[currentSlide].description ? (
          <p className="text-[15px] md:text-[16px] mt-4">
            {slides[currentSlide].description}
          </p>
        ) : (
          <ol className="mt-5 md:mt-10 list-disc list-inside">
            {slides[currentSlide].text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        )}
      </div>

      <div className="h-1/2 w-full md:h-full md:w-1/2 relative">
        <Image
          fill
          priority
          src={slides[currentSlide].image.src}
          alt={slides[currentSlide].title}
          className="object-cover h-full w-full"
        />
      </div>
      <button
        onClick={handleNext}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--main-color)] text-white rounded-full p-4 "
      >
        <MdOutlinePlayCircle
          size={25}
          style={{ color: "hover:var(second-color) active:var(second-color)" }}
          className="hover:text-black"
        />
      </button>
    </div>
  );
};
