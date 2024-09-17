"use client";
import React, { useState } from "react";
import Input from "@/components/util/input";

const OfferForm = ({ onSubmit, initialValues }) => {
  const [formData, setFormData] = useState(initialValues);
  const [selectedImage, setSelectedImage] = useState(null); // Handle image separately
  const [imagePreview, setImagePreview] = useState(""); // State for image preview
  const [submit, setSubmit] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file); // Set the selected image file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file); // Create a data URL for the image
    } else {
      setImagePreview(""); // Clear the image preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);

    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });

    if (selectedImage) {
      formDataToSubmit.append("requestOfferImage", selectedImage);
    }

    try {
      await onSubmit(formDataToSubmit);
      setFormData(initialValues); // Clear form text fields
      setSelectedImage(null); // Clear the image input
      setImagePreview(""); // Clear the image preview
      document.getElementById("image").value = ""; // Reset file input
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
      <div className="p-2 my-5 flex justify-between w-full">
        <label htmlFor="image" className="whitespace-nowrap">
          Imagine de referinta
        </label>
        <div className="relative w-full text-end">
          <input
            className="hidden"
            id="image"
            onChange={handleImageChange} // Handle file change
            name="image"
            type="file"
            tabIndex="-1"
          />
          <label
            htmlFor="image"
            className="text-center bg-[rgba(252,186,3)] hover:bg-[rgba(252,186,3,0.8)] text-white py-2 px-4 rounded-sm cursor-pointer inline-block"
          >
            Alege poza
          </label>
        </div>
      </div>
      {imagePreview && (
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
      <button className="mx-auto bg-[var(--main-color)] text-white w-[200px] p-2 my-10">
        {submit ? "Se trimite..." : "Cere oferta"}
      </button>
    </form>
  );
};

export default OfferForm;
