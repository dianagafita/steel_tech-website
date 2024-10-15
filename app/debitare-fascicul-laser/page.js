"use client";
import { redirect } from "next/navigation";
import Image from "next/image";
import img2 from "./steel.jpg";

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

export default function FurtunHidraulic() {
  return (
    <div className=" w-full  z-[20] min-h-[100vh] ">
      <div className=" relative h-[100vw] md:h-[50vw] w-full">
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
            a{" "}
          </span>
          <span className="text-white text-xl"> </span>
          <div className="w-full text-end mt-20"></div>
        </div>
      </div>
      <div className="p-10 flex w-full justify-between items-center">
        <span className="fontBold text-[15px]">TEXT-TEHNOLOGIE FOLOSITA </span>
        <span className="text-[13px]">Descriere </span>
      </div>
      <h1 className="fontBold text-center">CE UTILAJE FOLOSIM? </h1>
      <CarouselMainPage slides={slides1} />
      <Products />

      <div className="flex flex-wrap  w-[90vw] gap-5  items-center justify-center mx-auto my-10">
        <div className="flex flex-col">
          <h1 className="fontBold text-center"> PASUL 1 </h1>
          <HoverVideo
            videoSrc="https://res.cloudinary.com/defo6qykq/video/upload/v1727165005/steel_tech/IMG_2820_yksuzn.mov"
            fallbackImage={slides1.img}
            width="400px"
            height="250px"
          />{" "}
        </div>
        <div className="flex flex-col">
          <h1 className="fontBold text-center"> PASUL 2 </h1>
          <HoverVideo
            videoSrc="https://res.cloudinary.com/defo6qykq/video/upload/v1727165005/steel_tech/IMG_2820_yksuzn.mov"
            fallbackImage={slides1.img}
            width="400px"
            height="250px"
          />{" "}
        </div>{" "}
        <div className="flex flex-col">
          <h1 className="fontBold text-center"> PASUL 3 </h1>
          <HoverVideo
            videoSrc="https://res.cloudinary.com/defo6qykq/video/upload/v1727165005/steel_tech/IMG_2820_yksuzn.mov"
            fallbackImage={slides1.img}
            width="400px"
            height="250px"
          />{" "}
        </div>
      </div>
      <div className="flex flex-col w-full items-center">
        <h1 className="fontBold text-center">CUM FUNCTIONEAZA? </h1>
        <VideoPlayer videoId="E5w--KIy-nQ" />
      </div>
    </div>
  );
}
