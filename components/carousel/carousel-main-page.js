// import { Carousel } from "flowbite-react";
// import Image from "next/image";
// import img from "@/app/1.png";
// import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

// export function CarouselMainPage() {
//   const images = [
//     {
//       src: img,
//       alt: "Carousel Image 1",
//       text: "STEEL TECH INDUSTRY 1",
//       subText: "YES, WE CAN",
//     },
//     {
//       src: img,
//       alt: "Carousel Image 2",
//       text: "STEEL TECH INDUSTRY 2",
//       subText: "BUILD THE FUTURE",
//     },
//     {
//       src: img,
//       alt: "Carousel Image 3",
//       text: "STEEL TECH INDUSTRY 3",
//       subText: "INNOVATION AHEAD",
//     },
//   ];

//   const customPrevButton = <SlArrowLeft color="white" size={20} />;
//   const customNextButton = <SlArrowRight color="white" size={20} />;

//   return (
//     <div className="h-[100vw] md:h-[50vw] relative carousel-container ">
//       <Carousel
//         slide={false}
//         indicators={false}
//         leftControl={customPrevButton}
//         rightControl={customNextButton}
//         className="relative !rounded-none"
//       >
//         {images.map((image, index) => (
//           <div key={`carousel-${index}`} className="relative w-full h-full">
//             {/* Image */}
//             <Image
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-full object-cover"
//             />
//             {/* Overlay text */}
//             <div className="absolute mt-10  top-0 left-0 w-full h-full flex flex-col justify-center items-start p-5">
//               <span className="text-shadow-md text-[var(--main-color)] text-xl md:text-3xl font-bold">
//                 STEEL TECH <span className="text-white">INDUSTRY</span>
//               </span>
//               <span className="text-white md:text-xl text-shadow-md">
//                 YES, WE CAN
//               </span>
//               <div className="w-full text-end mt-40">
//                 {/* <button className="relative inline-flex items-center justify-center p-4 px-3.5 py-2.5 overflow-hidden font-medium text-white-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-0 hover:ring-purple-300">
//               <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white-600 via-purple-600 to-pink-700"></span>
//               <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-300 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-300 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
//               <span className="relative text-white text-base font-semibold">
//                 Button Text
//               </span>
//             </button> */}
//                 <button className=" relative px-5 py-2.5 overflow-hidden font-medium text-white bg-[rgba(252,186,3)]  rounded-sm shadow-inner group">
//                   <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white-300 group-hover:w-full ease"></span>
//                   <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white-300 group-hover:w-full ease"></span>
//                   <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
//                   <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
//                   <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white-300 opacity-0 group-hover:opacity-100"></span>
//                   <span className="relative text-[14px] md:text-base font-semibold transition-colors duration-300 delay-200 group-hover:text-[rgba(252,186,3)] ease">
//                     Button Text
//                   </span>
//                 </button>
//                 {/* <button className="relative px-5 py-2.5 overflow-hidden font-medium text-white bg-white-300 rounded-sm shadow-inner group">
//                   <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
//                   <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
//                   <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
//                   <span className="relative text-[14px] md:text-base font-semibold text-white-800 transition-colors duration-300 delay-200 group-hover:text-black ease">
//                     Button Text
//                   </span>
//                 </button> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// }
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
    <div className="relative flex w-full  my-20">
      {/* Left Section - Text */}
      <div className="w-1/2 bg-[var(--main-color)]  flex items-center justify-center p-5">
        <div>
          <h2 className="text-2xl font-bold">{slides[currentSlide].title}</h2>
          <p className="text-lg mt-4">{slides[currentSlide].description}</p>
        </div>
      </div>

      {/* Right Section - Image */}
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
