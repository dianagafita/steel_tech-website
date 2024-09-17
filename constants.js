import { AiOutlineSolution } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";

export const MAIN_MENU = [
  {
    path: "/one",
    title: "Item2",
  },
  {
    path: "/",
    title: "Item3",
  },
  {
    path: "/",
    title: "Item1",
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
    title: "Ceva",
    icon: <IoSettingsOutline size={30} />,
  },
];

export const MAIN_PAGE_CATEOGORIES = [
  {
    path: "/sertizare-furtunuri-hidraulice",
    title: "Sertizare furtunuri hidraulice",
    description:
      "Capetele furtunurilor hidraulice sunt conectate la fitinguri folosind o presa specializata. Aceasta creeaza o legatura între furtun si fiting, asigurând rezistența la presiuni mari.",
    icon: <AiOutlineSolution size={30} />,
  },
  {
    path: "/frezare-cnc",
    title: "Servicii de frezare CNC",
    description:
      "Procesul de prelucrare mecanica a materialelor prin utilizarea masinilor-unelte controlate de un computer, pentru a taia cu precizie piese din metal.",

    icon: <RiUserSettingsLine size={30} />,
  },
  {
    path: "/debitare-jet-plasma",
    title: "Debitare prin jet de plasma",
    description:
      "Proces de taiere termica a materialelor conductive, în special metale, utilizând un jet de plasma fierbinte.",

    icon: <IoSettingsOutline size={30} />,
  },
  {
    path: "/debitare-fscicul-laser",
    title: "Debitare prin fascicul LASER ",
    description:
      "Proces de taiere termica a materialelor conductive, în special metale, utilizând un jet de plasma fierbinte.",

    icon: <IoSettingsOutline size={30} />,
  },
];
