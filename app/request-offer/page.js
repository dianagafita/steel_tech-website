// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import img3 from "./2.png";
// import Input from "@/components/util/input";

// export default function OfferPage() {
//   const initialFormData = {
//     requestOfferFullName: "",
//     requestOfferPhone: "",
//     requestOfferEmail: "",
//     requestOfferDetails: "",
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [selectedImage, setSelectedImage] = useState(null); // Handle image separately
//   const [imagePreview, setImagePreview] = useState(""); // State for image preview
//   const [submit, setSubmit] = useState(false);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedImage(file); // Set the selected image file
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result); // Set the image preview
//       };
//       reader.readAsDataURL(file); // Create a data URL for the image
//     } else {
//       setImagePreview(""); // Clear the image preview
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmit(true);

//     const formDataToSubmit = new FormData();
//     formDataToSubmit.append(
//       "requestOfferFullName",
//       formData.requestOfferFullName
//     );
//     formDataToSubmit.append("requestOfferPhone", formData.requestOfferPhone);
//     formDataToSubmit.append("requestOfferEmail", formData.requestOfferEmail);
//     formDataToSubmit.append(
//       "requestOfferDetails",
//       formData.requestOfferDetails
//     );

//     if (selectedImage) {
//       formDataToSubmit.append("requestOfferImage", selectedImage);
//     }

//     try {
//       const response = await fetch("/api/requestOffer", {
//         method: "POST",
//         body: formDataToSubmit, // Send FormData directly
//       });

//       if (response.ok) {
//         setFormData(initialFormData); // Clear form text fields
//         setSelectedImage(null); // Clear the image input
//         setImagePreview(""); // Clear the image preview
//         document.getElementById("image").value = ""; // Reset file input
//         setSubmit(false);
//       } else {
//         setSubmit(false);
//       }
//     } catch (error) {
//       console.error("Error sending offer request:", error);
//       setSubmit(false);
//     }
//   };

//   return (
//     <div className="h-full w-full flex mt-[8rem] mx-auto lg:max-w-[80vw] p-5 px-10 text-[var(--second-color)]">
//       <div className="flex flex-col h-full w-full md:w-2/3">
//         <span className="px-2 my-2 fontBold">CERE OFERTA</span>
//         <span className="px-2 pb-10 text-[13px]">
//           Pentru a ne trimite o oferta va rugam sa completati formularul de mai
//           jos, cu datele dumneavoastra de contact, cu detalii depre cum ar
//           trebui sa arate produsul final si cu o poza de referinta daca aveti.
//           <p className="pt-5" /> Vom analiza formularul si vom reveni cu un
//           raspuns in cel mai scurt timp.
//         </span>
//         <form className="flex flex-col text-[15px]" onSubmit={handleSubmit}>
//           <div className="flex flex-col md:flex-row">
//             <Input
//               required
//               id="requestOfferFullName"
//               name="requestOfferFullName"
//               label="Nume complet"
//               value={formData.requestOfferFullName}
//               onChange={handleInputChange}
//             />
//             <Input
//               required
//               name="requestOfferPhone"
//               label="Telefon"
//               pattern="[0-9]{10}"
//               value={formData.requestOfferPhone}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="flex flex-col md:flex-row">
//             <Input
//               required
//               name="requestOfferEmail"
//               label="Email"
//               value={formData.requestOfferEmail}
//               onChange={handleInputChange}
//             />
//             <Input
//               required
//               name="requestOfferDetails"
//               type="textarea"
//               label="Descriere"
//               value={formData.requestOfferDetails}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="p-2 my-5 flex justify-between w-full">
//             <label htmlFor="image" className="whitespace-nowrap">
//               Imagine de referinta
//             </label>
//             <div className="relative w-full text-end">
//               <input
//                 className="hidden"
//                 id="image"
//                 onChange={handleImageChange} // Handle file change
//                 name="image"
//                 type="file"
//                 tabIndex="-1"
//               />
//               <label
//                 htmlFor="image"
//                 className="text-center bg-[rgba(252,186,3)] hover:bg-[rgba(252,186,3,0.8)] text-white py-2 px-4 rounded-sm cursor-pointer inline-block"
//               >
//                 Alege poza
//               </label>
//             </div>
//           </div>
//           {imagePreview && (
//             <div className="mt-5 mx-auto ">
//               <img
//                 src={imagePreview}
//                 alt="Preview"
//                 className="object-cover w-full h-full"
//                 style={{
//                   maxHeight: "150px",
//                   maxWidth: "200px",
//                 }}
//               />
//             </div>
//           )}
//           <button className="mx-auto bg-[var(--main-color)] text-white w-[200px] p-2 my-10">
//             {submit ? "Se trimite..." : "Cere oferta"}
//           </button>
//         </form>
//       </div>
//       <div className="relative pl-5 hidden md:block w-1/3 h-2/3 py-10 max-h-[500px]">
//         <Image
//           src={img3}
//           alt="Steel image 2"
//           className="object-cover w-full h-full"
//         />
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import React from "react";
import img3 from "./formimg.jpeg";
import OfferForm from "@/components/email/offer-form";

export default function OfferPage() {
  const initialFormData = {
    requestOfferFullName: "",
    requestOfferPhone: "",
    requestOfferEmail: "",
    requestOfferDetails: "",
  };

  const handleSubmit = async (formDataToSubmit) => {
    const response = await fetch("/api/requestOffer", {
      method: "POST",
      body: formDataToSubmit,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
  };

  return (
    <div className="h-[100vh] h-full w-full flex mt-[8rem] mx-auto lg:max-w-[80vw] p-5 px-10 text-[var(--second-color)]">
      <div className="flex flex-col h-full w-full md:w-2/3">
        <span className="px-2 my-2 fontBold">CERE OFERTA</span>
        <span className="px-2 pb-10 text-[13px]">
          Pentru a ne trimite o oferta va rugam sa completati formularul de mai
          jos, cu datele dumneavoastra de contact, cu detalii depre cum ar
          trebui sa arate produsul final si cu o poza de referinta daca aveti.
          <p className="pt-5" /> Vom analiza formularul si vom reveni cu un
          raspuns in cel mai scurt timp.
        </span>
        <OfferForm onSubmit={handleSubmit} initialValues={initialFormData} />
      </div>
      <div className="relative pl-5 hidden md:block w-1/3 self-start -[500px]">
        <Image
          priority
          src={img3}
          alt="Steel image 2"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}
