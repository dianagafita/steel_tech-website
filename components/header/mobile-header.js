"use client";
import React from "react";
import { BiX } from "react-icons/bi";
import { motion } from "framer-motion";
import { mobile_variants } from "@/styles/variants";
import { MAIN_MENU } from "@/constants";
import Link from "next/link";

// Mobile Header Component
export default function MobileHeader({ openMenu, isOpened }) {
  return (
    <motion.div
      initial="closed" // Initial state is closed
      animate={isOpened ? "open" : "closed"} // Animation based on isOpened state
      variants={mobile_variants}
      className={`w-fit p-10 h-full text-end top-20 fixed right-0 z-[10] bg-[rgba(0,0,0,0.8)] md:hidden`}
    >
      <ul className="flex text-[17px] items-start flex-col text-white justify-start p-4">
        {MAIN_MENU.map((item) => (
          <Link href={item.path} onClick={openMenu} key={item.title}>
            <li className=" hover:text-[var(--main-color)] m-3">
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </motion.div>
  );
}
