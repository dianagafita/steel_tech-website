import React from "react";
import Image from "next/image";
import img from "./7.png";

const services = [
  {
    step: "01",
    name: "NUME",
    imageUrl: img,
    description: "EVENTAUL DESCRIERE",
  },
  {
    step: "02",
    name: "Repairs",
    imageUrl: img,
    description:
      "Engine overhauls to brake replacements, we ensure high-quality work for your vehicle’s longevity.",
  },
  {
    step: "03",
    name: "Maintenance",
    imageUrl: img,
    description:
      "Oil changes, tire rotations, and more to enhance performance and prevent future issues.",
  },
];

const Products = () => {
  return (
    <section className="mx-auto">
      <div className="mx-auto px-4 py-16 sm:py-24 lg:max-w-7xl">
        <div className="flex flex-col items-center gap-12 sm:gap-16">
          <h1 className="font-bold text-center text-3xl">CE AM MAI CREAT</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 md:gap-5">
            {services.map((service) => (
              <div
                key={service.name}
                className="group h-60 w-60 [perspective:1000px] "
              >
                <div className="relative h-full w-full rounded-sm shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full rounded-sm [backface-visibility:hidden]">
                    {service.imageUrl && (
                      <Image
                        className="object-contain cursor-pointer object-left h-full w-full rounded-sm"
                        src={service.imageUrl}
                        alt={service.name}
                        width={320}
                        height={320}
                      />
                    )}
                  </div>
                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-sm bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      {/* <h2 className="text-2xl font-bold mb-4">
                        {service.name}
                      </h2> */}
                      <p className="text-[15px] text-center mb-4">
                        {service.description}
                      </p>
                      {/* <a href="tel:555-555-5555" className="inline-flex">
                        <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                          <span>Schedule Service</span>
                        </button>
                      </a> */}
                    </div>
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
