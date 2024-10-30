import React from "react";
import Image from "next/image";
import img from "./7.png";

const Products = ({ services, text, type }) => {
  return (
    <section className="mx-auto my-20">
      <div className="mx-auto px-4 py-10  lg:max-w-7xl">
        <div className="flex flex-col items-center  ">
          <h1 className="fontBold text-center text-[17px] md:text-[20px] mb-5 md:mb-10">
            {text}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  md:gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="group w-full h-60 px-10  lg:h-80 lg:w-80 [perspective:1000px] mb-10"
              >
                {(type !== "noname" || type !== "plasma") && (
                  <h1 className="fontBold text-center py-5 whitespace-nowrap">
                    {service.name}
                  </h1>
                )}
                <div
                  className={`${
                    service.description.length > 0
                      ? "relative [transform-style:preserve-3d]"
                      : ""
                  } h-full w-full rounded-sm shadowl transition-all duration-500 group-hover:[transform:rotateY(180deg)]`}
                >
                  <div
                    className={`${
                      service.description.length > 0 ? "absolute inset-0" : ""
                    } h-full w-full rounded-sm [backface-visibility:hidden]`}
                  >
                    {service.imageUrl && (
                      <Image
                        className={`${
                          type === "plasma" ? "object-contain" : "object-cover"
                        } cursor-pointer object-center h-full w-full rounded-sm`}
                        src={service.imageUrl}
                        alt="image"
                        width={320}
                        height={320}
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-sm bg-black/80 p-3 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    {service.description.length > 0 && (
                      <div className="flex min-h-full flex-col items-center justify-center  w-full">
                        <p className="text-[14px] text-center ">
                          {service.description}
                        </p>
                      </div>
                    )}{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
