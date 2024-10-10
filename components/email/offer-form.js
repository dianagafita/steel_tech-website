"use client";
import React, { useState } from "react";
import Input from "@/components/util/input";

const OfferForm = ({ onSubmit, initialValues }) => {
  const [formData, setFormData] = useState(initialValues);
  const [selectedFile, setSelectedFile] = useState(null); // Handle file (image or DXF) separately
  const [imagePreview, setImagePreview] = useState(""); // State for image preview
  const [fileType, setFileType] = useState(""); // State for file type
  const [submit, setSubmit] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return; // If no file is selected, return early

    setSelectedFile(file); // Set the selected file (image or DXF)

    // Check if the file is an image based on its MIME type
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the image preview
        setFileType("image"); // Set file type as image
      };
      reader.readAsDataURL(file); // Create a data URL for the image
    } else if (file.name.toLowerCase().endsWith(".dxf")) {
      // If the file is a DXF based on its extension
      setFileType("DXF"); // Set file type as DXF
      setImagePreview(""); // Clear image preview
    } else {
      setFileType("Unknown"); // Set file type as unknown for unrecognized files
      setImagePreview(""); // Clear image preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);

    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });

    if (selectedFile) {
      formDataToSubmit.append("requestOfferFile", selectedFile); // Append image or DXF file
    }

    try {
      await onSubmit(formDataToSubmit);
      setFormData(initialValues); // Clear form text fields
      setSelectedFile(null); // Clear the file input
      setImagePreview(""); // Clear the image preview
      setFileType(""); // Reset the file type
      document.getElementById("file").value = ""; // Reset file input
      setSubmit(false);
    } catch (error) {
      console.error("Error sending offer request:", error);
      setSubmit(false);
    }
  };

  return (
    <form className="flex flex-col text-[15px]" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row">
        <Input
          required
          id="requestOfferFullName"
          name="requestOfferFullName"
          label="Nume complet"
          value={formData.requestOfferFullName}
          onChange={handleInputChange}
        />
        <Input
          required
          name="requestOfferPhone"
          label="Telefon"
          pattern="[0-9]{10}"
          value={formData.requestOfferPhone}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <Input
          required
          name="requestOfferEmail"
          label="Email"
          value={formData.requestOfferEmail}
          onChange={handleInputChange}
        />
        <Input
          required
          name="requestOfferDetails"
          type="textarea"
          label="Descriere"
          value={formData.requestOfferDetails}
          onChange={handleInputChange}
        />
      </div>
      <div className="p-2 my-5 flex items-center  jusify-between w-full ">
        <label htmlFor="file" className="whitespace-np my-2">
          Fisier de referinta (Imagine sau DXF)
        </label>
        <div className="relative w-full text-end my-2">
          <input
            className="hidden"
            id="file"
            onChange={handleFileChange} // Handle file change (image or DXF)
            name="file"
            type="file"
            tabIndex="-1"
            accept="image/png, image/gif, image/jpeg, .dxf, application/dxf, application/x-dxf" // Accept images and DXF files
          />
          <label
            htmlFor="file"
            className="text-center bg-[rgba(252,186,3)] hover:bg-[rgba(252,186,3,0.8)] text-white py-2 px-4 rounded-sm cursor-pointer inline-block"
          >
            Alege fisier
          </label>
        </div>
      </div>

      {/* If the file is an image, show preview */}
      {imagePreview && fileType === "image" && (
        <div className="mt-5 mx-auto">
          <img
            src={imagePreview}
            alt="Preview"
            className="object-cover w-full h-full"
            style={{
              maxHeight: "150px",
              maxWidth: "200px",
            }}
          />
        </div>
      )}

      {/* If the file is DXF, show a message */}
      {selectedFile && fileType === "DXF" && (
        <div className="mt-5 mx-auto text-center">
          <p>Fișier DXF încărcat: {selectedFile.name}</p>
        </div>
      )}

      {/* Handle unknown file types */}
      {selectedFile && fileType === "Unknown" && (
        <div className="mt-5 mx-auto text-center">
          <p>Fișier necunoscut: {selectedFile.name}</p>
        </div>
      )}

      <button className="mx-auto bg-[var(--main-color)] text-white w-[200px] p-2 my-10">
        {submit ? "Se trimite..." : "Cere oferta"}
      </button>
    </form>
  );
};

export default OfferForm;
