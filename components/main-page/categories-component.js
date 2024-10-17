import { MAIN_PAGE_CATEOGORIES } from "@/constants";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CategoriesComponent() {
  return (
    <div className="p-5 text-white flex flex-col items-center w-full mb-10">
      <div className="flex flex-col w-full items-center  md:w-1/2 my-10">
        <span className="text-[var(--main-color)] text-[12px] text-center md:whitespace-nowrap">
          Servicii profesionale si de inalta calitate
        </span>
        <span className="text-[var(--second-color)] text-center font-bold text-[16px] mt-3 mb-2">
          STEELTECH gama de servicii
        </span>
      </div>
      <ul className="flex flex-col md:flex-row  w-full items-center justify-center ">
        {MAIN_PAGE_CATEOGORIES.map((item, index) => (
          <div key={index} className="w-full m-1 max-w-[500px]">
            <div
              className={`${
                index === 0
                  ? "bg-[var(--main-color)]"
                  : "bg-white text-[var(--second-color)]"
              } flex max-w-[500px] flex-col justify-between rounded-sm flex flex-col p-5 h-[360px] w-full shadow-[0px_4px_10px_rgba(0,0,0,0.2)]`}
            >
              <span
                className={`${index !== 0 ? "text-[var(--main-color)]" : ""}`}
              >
                {item.icon}
              </span>
              <span className="text-[14px] mt-5">{item.title}</span>
              <span className=" decoration pb-5 pt-2 text-[10px]">
                {item.description}
              </span>{" "}
              <Link
                href={item.path}
                className="border-t border-white pt-3 mt-2 text-[12px] flex justify-between"
              >
                DETALII
                <FaArrowRightLong
                  size={20}
                  className={` ${
                    index !== 0
                      ? " hover:bg-[var(--main-color)] hover:text-white text-[var(--main-color)]"
                      : " hover:bg-white text-white hover:text-[var(--main-color)]"
                  }  rounded-full  p-1`}
                />
              </Link>{" "}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
