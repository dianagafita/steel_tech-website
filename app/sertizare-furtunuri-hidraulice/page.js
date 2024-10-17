"use client";
import Image from "next/image";
import img2 from "./main.jpg";
import { CarouselMainPage } from "@/components/carousel/carousel-main-page";
import Products from "@/components/category-page/products";
import step1 from "@/app/assets/photos/sertizare/pasi/step1.jpg";
import step2 from "@/app/assets/photos/sertizare/pasi/step2.jpg";
import step3 from "@/app/assets/photos/sertizare/pasi/step3.jpg";
import step4 from "@/app/assets/photos/sertizare/pasi/step4.jpg";
import step5 from "@/app/assets/photos/sertizare/pasi/step5.jpg";

import atelier1 from "@/app/assets/photos/sertizare/atelier1.jpg";
import atelier2 from "@/app/assets/photos/sertizare/atelier2.jpg";
import atelier3 from "@/app/assets/photos/sertizare/atelier3.jpg";
import atelier4 from "@/app/assets/photos/sertizare/atelier4.jpg";

import { slides1 } from "@/constants";

const steps = [
  {
    step: "01",
    name: " Pregatirea Materialelor",
    imageUrl: step1,
    description:
      "Furtunuri Hidraulice: Fabricate din cauciuc flexibil sau compus sintetic, rezistente la presiune, armaturi: Conectori metalici adaptați la dimensiunea furtunului, presă hidraulică. ",
  },
  {
    step: "02",
    name: "Pregatirea Furtunului",
    imageUrl: step2,
    description:
      "Se taie furtunul la lungimea dorită, folosind un aparat de taiat special pentru a obține o taiere curata.Se îndepărtează straturile exterioare ale furtunului (dacă este cazul) pentru a permite inserția fitingului. ",
  },
  {
    step: "03",
    name: "Montarea Fitingului",
    imageUrl: step3,
    description:
      "Fitingul este introdus în capătul furtunului, ajungând până la marcajul de inserție (dacă există).Este important ca fitingul să fie introdus corect pentru a asigura o etanșare eficientă.",
  },
  {
    step: "03",
    name: "Sertizarea",
    imageUrl: step4,
    description:
      "Presa hidraulică este setată pe dimensiunea corespunzătoare fitingului și furtunului.Furtunul cu fitingul montat este plasat în presă și se aplică presiunea necesară pentru a „sertiza” conectorul. Acest proces îmbină fizic furtunul cu fitingul, asigurând o etanșare perfectă.",
  },
  {
    step: "03",
    name: "Verificarea Finala",
    imageUrl: step5,
    description:
      "După sertizare, se verifică conexiunea pentru a se asigura că este etanșă și rezistentă. Este recomandat să se realizeze o masuratoare cu ajutorul unui şubler, pentru a verifica cota reala de sertizare.",
  },
];

const atelier = [
  {
    imageUrl: atelier1,
    description: "",
  },
  {
    imageUrl: atelier2,
    description: "",
  },

  {
    imageUrl: atelier4,
    description: "",
  },
];

export default function FurtunHidraulic() {
  return (
    <div className=" w-full  z-[20] min-h-[100vh] mb-20">
      <div className=" relative h-[100vw] md:h-[50vw] w-full">
        <Image
          src={img2}
          priority
          alt="Background image"
          fill
          style={{
            objectFit: "cover",
          }}
        />
        <div className=" absolute top-10 left-0 w-full h-full flex flex-col justify-center items-start p-5">
          <span className="text-[var(--main-color)] text-3xl font-bold">
            Sertizarea furtunurilor hidraulice
          </span>
          <span className="text-white text-xl"> </span>
          <div className="w-full text-end mt-20"></div>
        </div>
      </div>
      <div className="p-10 my-10 flex w-full justify-between items-center">
        <span className="hidden md:block fontBold text-[15px]">DESCRIERE</span>
        <span className="text-[15px] w-1/2">
          Sertizarea furtunurilor hidraulice este un proces esențial pentru
          asigurarea etanșeității și funcționării corecte a sistemelor
          hidraulice.
        </span>
      </div>
      <h1 className="fontBold text-center">CE UTILAJE FOLOSIM? </h1>
      <CarouselMainPage slides={slides1} />
      <Products services={steps} text="CARE SUNT PASII?" />
      <Products services={atelier} text="ATELIERUL" />

      {/* <div className="flex flex-col w-full items-center">
        <h1 className="fontBold text-center">CUM FUNCTIONEAZA? </h1>
        <VideoPlayer videoId="E5w--KIy-nQ" />
      </div> */}
    </div>
  );
}
