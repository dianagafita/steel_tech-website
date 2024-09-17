import React from "react";

export default function OfferEmailTemplate({ offer }) {
  console.log("sss", offer);
  const imageUrl = offer.image ? URL.createObjectURL(offer.image) : "";

  return (
    <div>
      <h1>Offer Request Details</h1>
      <p>
        <strong>Full Name:</strong> {offer.fullName}
      </p>
      <p>
        <strong>Phone:</strong> {offer.phone}
      </p>
      <p>
        <strong>Email:</strong> {offer.email}
      </p>
      <p>
        <strong>Description:</strong> {offer.details}
      </p>

      {offer.image ? (
        <div>
          <h2>Reference Image:</h2>
          <img
            src={imageUrl}
            alt="Reference"
            style={{
              height: "6rem",
              width: "4rem",
              margin: "5px",
              verticalAlign: "middle",
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
