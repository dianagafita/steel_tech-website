import Image from "next/image";
import img from "@/app/1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import QualitiesComponent from "./qualities-component";
import Link from "next/link";

export default function InfoComponent() {
  return (
    <div className="bg-[#2B2A27]  text-white w-full flex flex-col ">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="px-5 pt-5 flex flex-col h-full w-full md:w-1/2 mt-10">
          <span className="text-[var(--main-color)] text-[12px]">
            High performance Services for industry and technology
          </span>
          <span className="text-white font-bold text-[16px] mt-3 mb-2">
            STEELECH is an industrial operator providing full range services in
            the sphere of Steel Processing!
          </span>
          <div className="flex flex-col w-full items-end p-5">
            <span className="flex flex-col text-[#757471] font-100 text-[14px] w-[200px] mb-5">
              Make your own project come true with our help! Give us your
              project idea and we will make it happen!
              <Link
                href="/request-offer"
                className="flex justify-between my-5 text-[var(--main-color)] rounded-sm  text-[12px] py-1 hover:text-white active:text-white"
              >
                DETALII
                <FaArrowRightLong />
              </Link>
            </span>
          </div>
          {/* <button className="w-1/2 relative px-2 py-2.5 overflow-hidden font-medium text-white bg-[rgba(252,186,3)] rounded-sm shadow-inner group">
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white-300 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white-300 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white-300 opacity-0 group-hover:opacity-100"></span>
        <span className="relative text-[14px] md:text-base font-semibold transition-colors duration-300 delay-200 group-hover:text-[rgba(252,186,3)] ease">
          Button Text
        </span>
      </button> */}
        </div>
        {/* Right Side Images */}
        <div className="xl:ml-20 flex p-5 pb-10 relative md:w-1/2 justify-center md:justify-end items-center md:items-start ">
          <div className="mx-2 md:mx-0 relative w-[300px] md:w-full  md:h-[300px]">
            <Image
              src={img}
              alt="Steel image 1"
              className="h-full object-contain"
            />
          </div>
          <div className="md:block hidden mx-2 md:mx-0 md:absolute md:top-40 md:right-40 w-[200px] md:w-[30vw] h-[200px]">
            <Image
              src={img}
              alt="Steel image 2"
              className="h-full object-contain"
            />
          </div>
        </div>
      </div>
      <QualitiesComponent />
    </div>
  );
}
