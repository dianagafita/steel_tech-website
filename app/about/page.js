import Image from "next/image";
import React from "react";
import img from "./3.png";

export default function AboutPage() {
  return (
    <div className="w-full h-full mb-20">
      {/* Hero Section */}
      <div className="relative h-[30vw] w-full text-black">
        <Image
          src={img}
          alt="Background image"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* About Section */}
      <h1 className="fontBold text-[18px] text-center my-10">DESPRE NOI</h1>

      <div className="max-w-[80vw] mx-auto p-5 text-[15px] leading-relaxed text-justify">
        <p>
          Înființată în 2014 în Suceava, firma noastră a început ca un jucător
          de încredere în domeniul sertizării furtunurilor hidraulice. Cu o
          abordare orientată spre client și un angajament ferm față de calitate,
          am reușit să ne consolidăm rapid poziția pe piață, câștigând astfel
          încrederea clienților și partenerilor noștri.
        </p>
        <p className="mt-4">
          În dorința de a ne extinde oferta de servicii și de a răspunde mai
          bine nevoilor clienților, în 2023, am decis să ne diversificăm
          activitățile și să ne orientăm spre domenii complementare. Astfel, am
          adăugat la portofoliul nostru servicii de frezare CNC și debitare prin
          jet de plasmă, utilizând echipamente de ultimă generație și tehnologii
          avansate.
        </p>
        <p className="mt-4">
          Aceste noi servicii ne permit să oferim soluții personalizate pentru o
          gamă variată de industrii, de la construcții și inginerie până la
          producția de componente pentru diferite aplicații industriale.
        </p>
        <p className="mt-4">
          Ne mândrim cu echipa noastră de profesioniști calificați, care
          contribuie la realizarea unor proiecte de succes și la atingerea celor
          mai înalte standarde de excelență.
        </p>
        <p className="mt-4">
          De-a lungul anilor, am crescut nu doar în ceea ce privește
          capacitățile și serviciile oferite, ci și în ceea ce privește
          reputația noastră. Privind spre viitor, ne angajăm să continuăm să
          inovăm și să ne adaptăm la cerințele pieței, oferind clienților noștri
          soluții eficiente și de calitate superioară.
        </p>
      </div>
    </div>
  );
}
