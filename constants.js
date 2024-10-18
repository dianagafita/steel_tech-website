import { AiOutlineSolution } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { GiLaserTurret } from "react-icons/gi";
import { SiEquinixmetal } from "react-icons/si";

import { Shell } from "lucide-react";

import img from "./steel.png";
import presa from "@/app/assets/photos/sertizare/utilaje/presa.jpg";
import masina_taiat from "@/app/assets/photos/sertizare/utilaje/masina_taiat.jpg";
import decojit from "@/app/assets/photos/sertizare/utilaje/masina_decojit.jpg";
import montat_fitinguri from "@/app/assets/photos/sertizare/utilaje/montaj_fitinguri.jpg";

import plasma_1 from "@/app/assets/photos/plasma/utilaje/utilaj1.jpg";
import plasma_2 from "@/app/assets/photos/plasma/utilaje/utilaj2.jpg";
import plasma_3 from "@/app/assets/photos/plasma/utilaje/utilaj3.jpg";
import plasma_4 from "@/app/assets/photos/plasma/utilaje/utilaj4.jpg";
import plasma_5 from "@/app/assets/photos/plasma/utilaje/utilaj5.jpg";
import plasma_6 from "@/app/assets/photos/plasma/utilaje/utilaj6.jpg";
import plasma_7 from "@/app/assets/photos/plasma/utilaje/utilaj7.jpg";

export const MAIN_MENU = [
  {
    path: "/sertizare-furtunuri-hidraulice",
    title: "Furtun hidraulic",
  },
  {
    path: "/debitare-jet-plasma",
    title: "Debitare plasma",
  },
  // {
  //   path: "/",
  //   title: "Debitare laser",
  // },
];

export const MAIN_PAGE_PROP = [
  {
    title: "Profesionalism & Calificare",
    icon: <AiOutlineSolution size={30} />,
  },
  {
    title: "Solutii Personalizate",
    icon: <RiUserSettingsLine size={30} />,
  },
  {
    title: "Proiectare CAD/CAM",
    icon: <IoSettingsOutline size={30} />,
  },
];

export const MAIN_PAGE_CATEOGORIES = [
  {
    path: "/sertizare-furtunuri-hidraulice",
    title: "Sertizare furtunuri hidraulice",
    description:
      "Capetele furtunurilor hidraulice sunt conectate la fitinguri folosind o presa specializata. Aceasta creeaza o legatura între furtun si fiting, asigurând rezistența la presiuni mari.",
    icon: <Shell size={30} />,
  },

  {
    path: "/debitare-jet-plasma",
    title: "Debitare prin jet de plasma",
    description:
      "Reprezintă o soluție eficientă pentru tăierea precisă a materialelor metalice. Plasma cutting folosește un arc electric generat printr-un jet de gaz comprimat, care topește și taie materialul cu o precizie remarcabilă.",
    icon: <SiEquinixmetal size={30} />,
  },
  {
    path: "",
    title: "Debitare prin fascicul LASER ",
    description:
      "Una dintre cele mai avansate metode de prelucrare a materialelor, pentru obținerea unor tăieturi extrem de precise. Folosește un fascicul de lumină concentrat pentru a tăia materiale cu o acuratețe extraordinară.",
    icon: <GiLaserTurret size={30} />,
  },
];

export const slides1 = [
  {
    title: "Presa hidraulica",
    description: "Va aplica presiune pentru a conecta furtunul la fitinguri.",
    image: presa,
  },
  {
    title: "Masina de taiat",
    description: "Aparat de taiat special pentru a obține o taiere curata",
    image: masina_taiat,
  },
  {
    title: "Masina de decojit",
    description: "This is the description for slide 3.",
    image: decojit,
  },
  {
    title: "Dispozitiv de montat fitinguri",
    description:
      " Acest proces îmbină fizic furtunul cu fitingul, asigurând o etanșare perfectă.Este esențial ca procesul de sertizare să fie realizat uniform pentru a preveni deteriorarea furtunului sau a fitingului.",
    image: montat_fitinguri,
  },
];

export const slides2 = [
  {
    title: "SAFRATIC HPC 300A",
    description:
      "Grosimi pana la 30mm. Mașinile noastre de debitare cu plasmă utilizează tehnologie de ultimă generație pentru a garanta rezultate de înaltă calitate. Prin intermediul unui jet de mare viteza de gaz ionizat, plasma creează o temperatură extrem de ridicată (peste 20.000°C), suficientă pentru a topi metalul și a-l separa curat, fără a lăsa margini aspre sau imperfecțiuni.",
    image: plasma_1,
  },
  {
    title: "SAFRATIC HPC 300A",
    description:
      "Grosimi pana la 30mm. Mașinile noastre de debitare cu plasmă utilizează tehnologie de ultimă generație pentru a garanta rezultate de înaltă calitate. Prin intermediul unui jet de mare viteza de gaz ionizat, plasma creează o temperatură extrem de ridicată (peste 20.000°C), suficientă pentru a topi metalul și a-l separa curat, fără a lăsa margini aspre sau imperfecțiuni.",
    image: plasma_2,
  },
  {
    title: "SAFRATIC HPC 300A",
    description:
      "Grosimi pana la 30mm. Mașinile noastre de debitare cu plasmă utilizează tehnologie de ultimă generație pentru a garanta rezultate de înaltă calitate. Prin intermediul unui jet de mare viteza de gaz ionizat, plasma creează o temperatură extrem de ridicată (peste 20.000°C), suficientă pentru a topi metalul și a-l separa curat, fără a lăsa margini aspre sau imperfecțiuni.",
    image: plasma_3,
  },
  {
    title: "SAFRATIC HPC 300A",
    description:
      "Grosimi pana la 30mm. Mașinile noastre de debitare cu plasmă utilizează tehnologie de ultimă generație pentru a garanta rezultate de înaltă calitate. Prin intermediul unui jet de mare viteza de gaz ionizat, plasma creează o temperatură extrem de ridicată (peste 20.000°C), suficientă pentru a topi metalul și a-l separa curat, fără a lăsa margini aspre sau imperfecțiuni.",
    image: plasma_4,
  },
  {
    title: "SAFRATIC HPC 300A",
    description:
      "Grosimi pana la 30mm. Mașinile noastre de debitare cu plasmă utilizează tehnologie de ultimă generație pentru a garanta rezultate de înaltă calitate. Prin intermediul unui jet de mare viteza de gaz ionizat, plasma creează o temperatură extrem de ridicată (peste 20.000°C), suficientă pentru a topi metalul și a-l separa curat, fără a lăsa margini aspre sau imperfecțiuni.",
    image: plasma_5,
  },
  {
    title: "SAFRATIC HPC 300A",
    description:
      "Grosimi pana la 30mm. Mașinile noastre de debitare cu plasmă utilizează tehnologie de ultimă generație pentru a garanta rezultate de înaltă calitate. Prin intermediul unui jet de mare viteza de gaz ionizat, plasma creează o temperatură extrem de ridicată (peste 20.000°C), suficientă pentru a topi metalul și a-l separa curat, fără a lăsa margini aspre sau imperfecțiuni.",
    image: plasma_6,
  },
  {
    title: "SAFRATIC HPC 300A",
    description:
      "Grosimi pana la 30mm. Mașinile noastre de debitare cu plasmă utilizează tehnologie de ultimă generație pentru a garanta rezultate de înaltă calitate. Prin intermediul unui jet de mare viteza de gaz ionizat, plasma creează o temperatură extrem de ridicată (peste 20.000°C), suficientă pentru a topi metalul și a-l separa curat, fără a lăsa margini aspre sau imperfecțiuni.",
    image: plasma_7,
  },
];

export const slides3 = [
  {
    title: "NUME UTILAJ 1",
    description: "DESCRIERE",
    image: img,
  },
  {
    title: "Slide 2 Title",
    description: "This is the description for slide 2.",
    image: img,
  },
  {
    title: "Slide 3 Title",
    description: "This is the description for slide 3.",
    image: img,
  },
];

export const slides4 = [
  {
    title: "NUME UTILAJ 1",
    description: "DESCRIERE",
    image: img,
  },
  {
    title: "Slide 2 Title",
    description: "This is the description for slide 2.",
    image: img,
  },
  {
    title: "Slide 3 Title",
    description: "This is the description for slide 3.",
    image: img,
  },
];
