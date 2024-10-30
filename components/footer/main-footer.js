import React from "react";
import { MdPhone } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import MapComponent from "../map/map-component";
import Link from "next/link";
import { GoogleTranslate } from "../language-translate/language";

export default function MainFooter({ prefLangCookie }) {
  return (
    <div className="footer flex flex-col h-full  bg-[var(--second-color)]">
      <div className="p-10 text-white flex flex-col md:flex-row footer h-full">
        <div className="flex flex-col lg:flex-row w-full lg:justify-between ">
          {" "}
          <div className="flex flex-col w-full my-5  pr-10 lg:w-1/2">
            <span className="text-[13px] mb-5 fontBold">Contacteaza-ne</span>
            <span className="font-thin text-[12px] mb-2">
              Daca aveti intrebari nu ezitati sa ne contactati.
            </span>
            <span className="flex text-[15px] items-center font-bold text-[var(--main-color)]">
              <MdPhone className="mr-3 my-2 whitespace-nowrap" /> 072-824-0023
            </span>

            <Link
              className="text-[#757471] text-[12px] hover:text-white my-5"
              href="https://www.google.com/maps/place/Steeltech+Industry+SRL/@47.5500556,25.8971132,17z/data=!3m1!4b1!4m6!3m5!1s0x4735a9005be52575:0x44686e39fa87d5ea!8m2!3d47.5500556!4d25.8996935!16s%2Fg%2F11wbcdln0g?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
            >
              Romania, Suceava, Gura Humorului, Strada Moldovei, nr. 2 725300{" "}
            </Link>
            <GoogleTranslate
              moreSyle="block md:hidden text-white py-5 px-0"
              prefLangCookie={prefLangCookie}
            />
          </div>
          <div className="flex flex-col my-5 lg:items-center  w-full lg:w-1/2 text-[#757471]">
            <Link
              href="/about"
              className="font-bold mb-5 text-white fontBold text-[13px]"
            >
              Informatii
            </Link>
            <Link href="/about" className="text-[12px] flex items-center">
              <FaArrowRightLong className="mr-2 text-[var(--main-color)]" />
              Despre noi
            </Link>
          </div>
        </div>
        <div className="my-5 h-[400px] w-full">
          <MapComponent address="Str. Moldovei 725300, Gura Humorului 725300" />
        </div>
      </div>
      <div className="border-t py-5 text-center text-[10px]  border-[rgba(96,96,96,0.1)] w-full">
        <p translate="no" className=" text-[#757471]">
          &copy; 2024 SteelTech Industry. All rights reserved.
        </p>
      </div>
    </div>
  );
}
