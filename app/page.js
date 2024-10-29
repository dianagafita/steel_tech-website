import Image from "next/image";
import img from "./1.png";
import { FaFacebook } from "react-icons/fa6";
import InfoComponent from "@/components/main-page/info-component";
import QualitiesComponent from "@/components/main-page/qualities-component";
import CategoriesComponent from "@/components/main-page/categories-component";
import ClientsComponent from "@/components/main-page/clients-component";
import { FIRME } from "@/constants";

export default function Home() {
  return (
    <div className="w-full  z-[20] min-h-[100vh]">
      <div className=" relative h-[100vw] md:h-[50vw] w-full">
        <Image
          priority
          src={img}
          alt="Background image"
          fill
          style={{
            objectFit: "cover",
            //   WebkitMaskImage:
            //     "linear-gradient(to left, black 90%, transparent 100%)",
            //   maskImage: "linear-gradient(to right, black 80%, transparent 100%)",
            //
          }}
        />
        <div className=" absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-5">
          <span
            translate="no"
            className="text-[var(--main-color)] text-3xl font-bold"
          >
            STEEL TECH INDUSTRY
          </span>
          <span translate="no" className="text-white text-xl">
            YES, WE CAN
          </span>
          {/* <div className="w-full text-end mt-20">
            <button className=" relative px-2 py-2.5 overflow-hidden font-medium text-white bg-[rgba(252,186,3)] rounded-sm shadow-inner group">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white-300 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white-300 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white-300 opacity-0 group-hover:opacity-100"></span>
              <span className="relative text-[14px] md:text-base font-semibold transition-colors duration-300 delay-200 group-hover:text-[rgba(252,186,3)] ease">
                Button Text
              </span>
            </button>
          </div> */}
        </div>
      </div>
      <InfoComponent />

      <CategoriesComponent />
      <div className="border-t py-2 flex items-center justify-start md:justify-center space-x-5 text-[14px] w-[100vw] overflow-x-auto">
        {FIRME.map((firma, index) => (
          <div key={index} className="flex items-center mx-">
            <Image src={firma.image} alt="" width={100} height={100} />
          </div>
        ))}

        {/* <span className="flex items-center mx-5">
          <FaFacebook className="mr-2" />
          Facebook
        </span>
        <span className="flex items-center mx-5">
          <FaFacebook className="mr-2" />
          Facebook
        </span>
        <span className="flex items-center mx-5">
          <FaFacebook className="mr-2" />
          Facebook
        </span>
        <span className="flex items-center mx-5">
          <FaFacebook className="mr-2" />
          Facebook
        </span> */}
      </div>

      <ClientsComponent />
      <div className="bg-white h-[200px] md:h-[500px]"></div>
    </div>
  );
}
