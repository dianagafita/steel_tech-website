"use client";
import { redirect } from "next/navigation";
import img from "./5.png";
import img2 from "./3.png";
import Image from "next/image";
import { VideoPlayer } from "@/components/util/video-player";
import { CarouselMainPage } from "@/components/carousel/carousel-main-page";
import Products from "@/components/category-page/products";
import { MAIN_PAGE_CATEOGORIES } from "@/constants";
const validCategories = [
  "frezare-cnc",
  "sertizare-furtunuri-hidraulice",
  "debitare-jet-plasma",
  'debitare-fscicul-laser"',
];

const slides = [
  {
    title: "NUME UTILAJ 1",
    description: "DESCRIERE",
    image: img,
  },
  {
    title: "Slide 2 Title",
    description: "This is the description for slide 2.",
    image: img,
  },
  {
    title: "Slide 3 Title",
    description: "This is the description for slide 3.",
    image: img,
  },
];

export default function CategoryPage({ params }) {
  const { category } = params;

  if (!validCategories.includes(category)) {
    redirect("/");
  }

  const categoryPage = MAIN_PAGE_CATEOGORIES.find(
    (item) => item.path === `/${category}`
  );

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
            WebkitMaskImage:
              "linear-gradient(to left, black 90%, transparent 100%)",
            maskImage: "linear-gradient(to right, black 80%, transparent 100%)",
          }}
        />
        <div className=" absolute top-10 left-0 w-full h-full flex flex-col justify-center items-start p-5">
          <span className="text-[var(--main-color)] text-3xl font-bold">
            {categoryPage.title}
          </span>
          <span className="text-white text-xl"> </span>
          {/* <button className="text-end w-[200px] bg-white">ok</button> */}
          <div className="w-full text-end mt-20"></div>
        </div>
      </div>
      <div className="p-10 flex w-full justify-between items-center">
        <span className="fontBold text-[15px]">TEXT-TEHNOLOGIE FOLOSITA </span>
        <span className="text-[13px]">Descriere </span>
      </div>
      <h1 className="fontBold text-center">CE UTILAJE FOLOSIM? </h1>

      <CarouselMainPage slides={slides} />
      <Products />
      <div className="flex flex-col w-full items-center">
        <h1 className="fontBold text-center">CUM FUNCTIONEAZA? </h1>
        <VideoPlayer videoId="E5w--KIy-nQ" />
      </div>
    </div>
  );
}
