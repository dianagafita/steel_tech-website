// import Image from "next/image";
// import React from "react";
// import { MdPhone } from "react-icons/md";
// import Input from "../util/input";
// import img2 from "@/app/4.png";
// import img3 from "@/app/7.png";

// export default function ClientsComponent() {
//   return (
//     <div className="relative h-[900px] md:h-[50vw] w-full ">
//       <div className="relative h-[100vw] md:h-[50vw] lg:h-[40vw] w-full">
//         <Image
//           src={img2}
//           alt="Background image"
//           fill
//           style={{
//             objectFit: "cover",
//           }}
//         />
//       </div>
//       <div className="shadow-2xl top-0 absolute bottom left-0 w-full h-full flex flex-col justify-center items-start p-5">
//         <span className="text-white text-3xl font-bold">Clienti </span>
//         <span className="text-white text-xl">clienti</span>
//         <div className="w-full text-end mt-20"></div>
//       </div>
//       <div className="flex justify-between max-w-[1500px] p-5 lg:p-20  mb-20 absolute top-[600px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  max-h-[700px] md:max-h-[500px] bg-white w-[90vw]  md:m-0 md: w-[70vw] shadow-lg text-[var(--second-color)]">
//         <div className="flex flex-col h-full w-full md:w-2/3">
//           <span className="px-2 my-2 fontBold">CERE OFERTA</span>
//           <span className="px-2 pb-10 text-[13px]">
//             Arata-ne ce iti doresti sa obtii si noi iti spunem daca se poate
//           </span>
//           <form className="flex flex-col">
//             <div className="flex flex-col md:flex-row">
//               <Input name="name" label="Nume complet" />
//               <Input name="phone" label="Telefon" />{" "}
//             </div>
//             <div className="flex flex-col md:flex-row">
//               <Input name="email" label="Email" />{" "}
//               <Input name="description" type="textarea" label="Descriere" />
//             </div>
//             <div className="p-2 flex justify-between items-center w-full">
//               {" "}
//               <label className="" htmlFor="image">
//                 Imagine de referinta
//               </label>
//               <div className="relative">
//                 <input
//                   className="hidden"
//                   id="image"
//                   name="image"
//                   type="file"
//                   required
//                 />
//                 <label
//                   htmlFor="image"
//                   className="text-center bg-[rgba(252,186,3)] hover:bg-[rgba(252,186,3,0.8)] text-white py-2 px-4 rounded-sm cursor-pointer inline-block"
//                 >
//                   Choose File
//                 </label>
//               </div>{" "}
//             </div>{" "}
//           </form>
//         </div>
//         <div className="hidden md:block w-1/2 relative  w-[200px] h-full">
//           <Image src={img3} alt="Steel image 2" className="object-contain" />
//           <div className="flex text-[13px] items-center absolute top-[180px] right-10 bg-[var(--main-color)] p-2 px-3">
//             <MdPhone className="mr-2" /> 074-999-444
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import React from "react";
import { MdPhone } from "react-icons/md";
import Input from "../util/input";
import img2 from "@/app/4.png";
import img3 from "@/app/7.png";

export default function ClientsComponent() {
  return (
    <div className="h-full w-full ">
      {/* Background Image */}
      <div className="relative flex flex-col items-center inset-0 h-[70vh] md:h-[60vw] lg:h-[40vw]  w-full">
        <Image
          src={img2}
          alt="Background image"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-5 bg-gradient-to-b from-black/50 to-transparent">
          <span className="text-white text-3xl font-bold">Clienti</span>
          <span className="text-white text-xl">clienti</span>
        </div>
        <div className="absolute bottom-[-25rem] md:bottom-[-20rem] h-full w-full  flex  max-w-[90vw] md:max-w-[70vw] p-5 lg:p-10 mt-10 md:mt-0 mb-  max-h-[700px] md:max-h-[450px] bg-white shadow-lg text-[var(--second-color)] w-[90vw] md:w-[70vw]">
          <div className="flex flex-col h-full w-full md:w-2/3">
            <span className="px-2 my-2 fontBold">CERE OFERTA</span>
            <span className="px-2 pb-10 text-[13px]">
              Arata-ne ce iti doresti sa obtii si noi iti spunem daca se poate
            </span>
            <form className="flex flex-col text-[15px]">
              <div className="flex flex-col md:flex-row">
                <Input name="name" label="Nume complet" />
                <Input name="phone" label="Telefon" />
              </div>
              <div className="flex flex-col md:flex-row">
                <Input name="email" label="Email" />
                <Input name="description" type="textarea" label="Descriere" />
              </div>
              <div className="p-2 flex justify-between items-center w-full">
                <label htmlFor="image">Imagine de referinta</label>
                <div className="relative">
                  <input
                    className="hidden"
                    id="image"
                    name="image"
                    type="file"
                    required
                  />
                  <label
                    htmlFor="image"
                    className="text-center bg-[rgba(252,186,3)] hover:bg-[rgba(252,186,3,0.8)] text-white py-2 px-4 rounded-sm cursor-pointer inline-block"
                  >
                    Choose File
                  </label>
                </div>
              </div>
            </form>{" "}
          </div>
          <div className="relative pl-5 hidden md:block w-1/3  h-2/3">
            <Image
              src={img3}
              alt="Steel image 2"
              className="object-cover w-full h-full"
            />
            {/* Phone Number Section */}
            <div className="absolute bottom-0 md:bottom-[-1rem] flex text-[10px] lg:text-[13px]  items-center   right-0 bg-[var(--main-color)] p-2 px-3">
              <MdPhone className="mr-2" /> 074-999-444
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
    </div>
  );
}
