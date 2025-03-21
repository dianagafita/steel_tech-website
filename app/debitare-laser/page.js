"use client";
import Image from "next/image";
import img2 from "./mainmain.png";
import img from "./w.png";
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
import laser from "../assets/photos/laser/utilaje/laser1.jpg";

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
          src={laser}
          priority
          alt="Background image"
          fill
          style={{
            objectFit: "cover",
          }}
        />
        <div className=" absolute top-10 left-0 w-full h-full flex flex-col justify-center items-start p-5">
          <span className="text-[var(--main-color)] text-3xl font-bold">
            Debitare prin laser
          </span>
          <span className="text-white text-xl"> </span>
          <div className="w-full text-end mt-20"></div>
        </div>
      </div>
      <div className="p-10 flex w-full justify-between items-center md:mb-10">
        <span className="hidden fontBold text-[15px] md:block">DESCRIERE </span>
        <span className="text-[15px] md:text-[15px] md:w-2/3  text-justify ">
          Debitarea cu jet laser este o tehnologie avansată utilizată pentru
          tăierea precisă a unei game variate de materiale, inclusiv metale,
          plastic și lemn. Aceasta folosește un fascicul laser concentrat, care
          generează o temperatură extrem de ridicată, vaporizând sau topind
          materialul și oferind tăieturi curate și precise. Datorită preciziei
          sale ridicate și pierderilor minime de material, debitarea cu laser
          este preferată în industrii precum cea auto, aeronautică, electronică
          și design industrial. Tehnologia permite tăierea rapidă, fără contact
          fizic, reducând riscul de deformare și maximizând eficiența procesului
          de producție.
        </span>
      </div>
      <h1 className="fontBold text-center text-[17px] md:text-[20px]">
        CE UTILAJE FOLOSIM?{" "}
      </h1>
      <CarouselMainPage slides={slides3} />
      {/* <Products services={atelier} text="CE AM MAI CREAT?" type="plasma" /> */}

      {/* <div className="flex flex-wrap  w-[90vw] gap-5  items-center justify-center mx-auto my-10">
        <div className="flex flex-col">
          <h1 className="fontBold text-center"> PASUL 1 </h1>
          <HoverVideo
            videoSrc={img1}
            fallbackImage={img2.src}
            width="400px"
            height="250px"
          />{" "}
        </div>
      </div> */}
      {/*  <div className="flex flex-col">
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
