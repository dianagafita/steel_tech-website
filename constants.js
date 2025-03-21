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

import laser1 from "./app/assets/photos/laser/utilaje/laser1.jpg";
import laser2 from "./app/assets/photos/laser/utilaje/laser2.jpg";
import laser3 from "./app/assets/photos/laser/utilaje/laser3.jpg";
import laser4 from "./app/assets/photos/laser/utilaje/laser5.jpg";

import firma1 from "@/app/assets/photos/firms-logo/hypertherm.jpeg";
import firma2 from "@/app/assets/photos/firms-logo/garant.jpeg";
import firma3 from "@/app/assets/photos/firms-logo/manuli.jpeg";
import firma4 from "@/app/assets/photos/firms-logo/dormero.jpeg";
import firma5 from "@/app/assets/photos/firms-logo/holexok.jpeg";
import firma6 from "@/app/assets/photos/firms-logo/sc.jpeg";

export const MAIN_MENU = [
  {
    path: "/sertizare-furtunuri-hidraulice",
    title: "Furtun hidraulic",
  },
  {
    path: "/debitare-jet-plasma",
    title: "Debitare plasma",
  },
  {
    path: "/debitare-laser",
    title: "Debitare laser",
  },
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
    path: "/debitare-laser",
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
    title: "SAFMATIC HPC 300A",
    description:
      "Grosimi pana la 30mm. Mașinile noastre de debitare cu plasmă utilizează tehnologie de ultimă generație pentru a garanta rezultate de înaltă calitate. Prin intermediul unui jet de mare viteza de gaz ionizat, plasma creează o temperatură extrem de ridicată (peste 20.000°C), suficientă pentru a topi metalul și a-l separa curat, fără a lăsa margini aspre sau imperfecțiuni.",
    image: plasma_1,
  },
  {
    title: "SAFMATIC HPC 300A",
    description:
      "Grosimi pana la 30mm. Mașinile noastre de debitare cu plasmă utilizează tehnologie de ultimă generație pentru a garanta rezultate de înaltă calitate. Prin intermediul unui jet de mare viteza de gaz ionizat, plasma creează o temperatură extrem de ridicată (peste 20.000°C), suficientă pentru a topi metalul și a-l separa curat, fără a lăsa margini aspre sau imperfecțiuni.",
    image: plasma_2,
  },
  {
    title: "SAFMATIC HPC 300A",
    description:
      "Grosimi pana la 30mm. Mașinile noastre de debitare cu plasmă utilizează tehnologie de ultimă generație pentru a garanta rezultate de înaltă calitate. Prin intermediul unui jet de mare viteza de gaz ionizat, plasma creează o temperatură extrem de ridicată (peste 20.000°C), suficientă pentru a topi metalul și a-l separa curat, fără a lăsa margini aspre sau imperfecțiuni.",
    image: plasma_3,
  },
  {
    title: "SAFMATIC HPC 300A",
    description:
      "Grosimi pana la 30mm. Mașinile noastre de debitare cu plasmă utilizează tehnologie de ultimă generație pentru a garanta rezultate de înaltă calitate. Prin intermediul unui jet de mare viteza de gaz ionizat, plasma creează o temperatură extrem de ridicată (peste 20.000°C), suficientă pentru a topi metalul și a-l separa curat, fără a lăsa margini aspre sau imperfecțiuni.",
    image: plasma_4,
  },
  {
    title: "SAFMATIC HPC 300A",
    description:
      "Grosimi pana la 30mm. Mașinile noastre de debitare cu plasmă utilizează tehnologie de ultimă generație pentru a garanta rezultate de înaltă calitate. Prin intermediul unui jet de mare viteza de gaz ionizat, plasma creează o temperatură extrem de ridicată (peste 20.000°C), suficientă pentru a topi metalul și a-l separa curat, fără a lăsa margini aspre sau imperfecțiuni.",
    image: plasma_5,
  },
  {
    title: "SAFMATIC HPC 300A",
    description:
      "Grosimi pana la 30mm. Mașinile noastre de debitare cu plasmă utilizează tehnologie de ultimă generație pentru a garanta rezultate de înaltă calitate. Prin intermediul unui jet de mare viteza de gaz ionizat, plasma creează o temperatură extrem de ridicată (peste 20.000°C), suficientă pentru a topi metalul și a-l separa curat, fără a lăsa margini aspre sau imperfecțiuni.",
    image: plasma_6,
  },
  {
    title: "SAFMATIC HPC 300A",
    description:
      "Grosimi pana la 30mm. Mașinile noastre de debitare cu plasmă utilizează tehnologie de ultimă generație pentru a garanta rezultate de înaltă calitate. Prin intermediul unui jet de mare viteza de gaz ionizat, plasma creează o temperatură extrem de ridicată (peste 20.000°C), suficientă pentru a topi metalul și a-l separa curat, fără a lăsa margini aspre sau imperfecțiuni.",
    image: plasma_7,
  },
];

export const slides3 = [
  {
    title:
      "LASER FIBER HS G4020H - Tehnologie Avansata pentru Taiere de Precizie",

    text: [
      "Reglaj automat al axei Z pentru adaptare la denivelări",
      "Senzor de urmărire a materialului și obiectelor de pe masa de lucru",
      "Viteză maximă pentru tăierea tablei ondulate",
      "Stabilizator de tensiune 80KVA pentru întregul echipament",
    ],
    image: laser1,
  },
  {
    title: "LASER FIBER HS G4020H - Sistem de Control Inteligent si Siguranta",
    text: [
      "Chiller cu funcții de încălzire/răcire în circuit închis",
      "Computer industrial cu unitate de control separată + telecomandă wireless",
      "Software de grafică inclus, opțional controller Beckoff",
      "Sistem anticoleziune și traiectorie optimizată de tăiere",
    ],
    image: laser2,
  },
  {
    title:
      "LASER FIBER HS G4020H - Performanta si Precizie la Cel Mai Inalt Nivel",
    text: [
      "Motoare servo de ultimă generație: Alpha Wittenstein, Gudel, Sanyo Denky",
      "Electronică de înaltă calitate: Schneider (Germania), Omron (Japonia)",
      "Cap laser Precitec (Germania) pentru tăiere precisă",
      "Batiu sudat robotic, tratat termic și garantat 20 de ani împotriva deformării",
    ],
    image: laser3,
  },
  {
    title: "LASER FIBER HS G4020H - Functionalitate si Eficienta Energetica",
    text: [
      "Flux optimizat de aer și sistem de filtrare a gazelor",
      "Sursă laser modulară IPG (4Kw-13Kw) cu aer condiționat integrat",
      "Monitorizare în timp real cu cameră video și sistem de mentenanță online",
      "Masa dublă interschimbabilă în 8 secunde pentru productivitate maximă",
    ],
    image: laser4,
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

export const FIRME = [
  {
    image: firma1.src,
  },
  {
    image: firma2,
  },
  {
    image: firma3,
  },
  {
    image: firma4,
  },

  {
    image: firma5,
  },
  {
    image: firma6,
  },
];
