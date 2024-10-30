"use client";
import Image from "next/image";
import img2 from "./mainmain.png";
import img from "./w.png";
import img1 from "./2.jpeg";
import img4 from "./albst.jpeg";
import img3 from "./w.jpeg";
import gratar from "./cpt.jpeg";
import past from "./past.jpeg";
import ex1 from "./ex11.jpeg";
import ex2 from "./ex22.jpeg";

import { VideoPlayer } from "@/components/util/video-player";
import { CarouselMainPage } from "@/components/carousel/carousel-main-page";
import Products from "@/components/category-page/products";
import {
  MAIN_PAGE_CATEOGORIES,
  slides1,
  slides2,
  slides3,
  slides4,
} from "@/constants";
import HoverVideo from "@/components/util/gifs";

const atelier = [
  {
    imageUrl: gratar,
    description: "",
  },
  {
    imageUrl: past,
    description: "",
  },
  {
    imageUrl: ex1,
    description: "",
  },
  {
    imageUrl: ex2,
    description: "",
  },
  {
    imageUrl: img3,
    description: "",
  },
  {
    imageUrl: img4,
    description: "",
  },
];
// const atelier = [
//   {
//     imageUrl: atelier1,
//     description: "",
//   },
//   {
//     imageUrl: atelier2,
//     description: "",
//   },
//   {
//     imageUrl: atelier3,
//     description: "",
//   },
// ];
export default function FurtunHidraulic() {
  return (
    <div className=" w-full  z-[20] min-h-[100vh] ">
      <div className=" relative h-[50vh] md:h-[40vw] w-full">
        <Image
          src={img2}
          priority
          alt="Background image"
          fill
          style={{
            objectFit: "cover",
          }}
        />
        <div className=" absolute top-10 left-0 w-full h-full flex flex-col justify-center items-start p-5">
          <span className="text-[var(--main-color)] text-3xl font-bold">
            Debitare prin jet de plasma
          </span>
          <span className="text-white text-xl"> </span>
          <div className="w-full text-end mt-20"></div>
        </div>
      </div>
      <div className="p-10 flex w-full justify-between items-center md:mb-10">
        <span className="hidden fontBold text-[15px] md:block">DESCRIERE </span>
        <span className="text-[15px] md:text-[15px] md:w-2/3  text-justify ">
          Tehnologie de Ultimă Generație pentru Tăierea Materialelor Debitarea
          cu plasmă reprezintă o soluție modernă și eficientă pentru tăierea
          precisă a materialelor metalice, utilizată pe scară largă în diverse
          industrii. Plasma cutting folosește un arc electric generat printr-un
          jet de gaz comprimat, care topește și taie materialul cu o precizie
          remarcabilă.
        </span>
      </div>
      <h1 className="fontBold text-center text-[17px] md:text-[20px]">
        CE UTILAJE FOLOSIM?{" "}
      </h1>
      <CarouselMainPage slides={slides2} />
      <Products services={atelier} text="CE AM MAI CREAT?" type="plasma" />

      {/* <div className="flex flex-wrap  w-[90vw] gap-5  items-center justify-center mx-auto my-10">
        <div className="flex flex-col">
          <h1 className="fontBold text-center"> PASUL 1 </h1>
          <HoverVideo
            videoSrc="https://res.cloudinary.com/defo6qykq/video/upload/v1727165005/steel_tech/IMG_2820_yksuzn.mov"
            fallbackImage={img2.src}
            width="400px"
            height="250px"
          />{" "}
        </div>
        <div className="flex flex-col">
          <h1 className="fontBold text-center"> PASUL 2 </h1>
          <HoverVideo
            videoSrc="https://res.cloudinary.com/defo6qykq/video/upload/v1727165005/steel_tech/IMG_2820_yksuzn.mov"
            fallbackImage={img2.src}
            width="400px"
            height="250px"
          />{" "}
        </div>{" "}
        <div className="flex flex-col">
          <h1 className="fontBold text-center"> PASUL 3 </h1>
          <HoverVideo
            videoSrc="https://res.cloudinary.com/defo6qykq/video/upload/v1727165005/steel_tech/IMG_2820_yksuzn.mov"
            fallbackImage={img2.src}
            width="400px"
            height="250px"
          />{" "}
        </div>
      </div> */}
      {/* <div className="flex flex-col w-full items-center">
        <h1 className="fontBold text-center text-[17px] md:text-[20px]">
          CUM FUNCTIONEAZA?{" "}
        </h1>
        <VideoPlayer videoId="E5w--KIy-nQ" />
      </div> */}
    </div>
  );
}
