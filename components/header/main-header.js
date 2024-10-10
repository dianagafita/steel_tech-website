"use client";
import Image from "next/image";
import logo from "@/app/2.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_MENU } from "@/constants";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import MobileHeader from "./mobile-header";
import ServerMiniHeader from "./server-mini-header";
import MiniHeader from "./mini-header";

export default function MainHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      <div className="header fixed top-0 z-[50] w-full">
        <MiniHeader />
        <div className="flex items-center  justify-between bg-[rgba(0,0,0,0.9)] text-white w-full">
          <div className="h-[3.5rem] w-full flex items-center justify-between">
            <Link href="/" className="w-[60px] relative self-center">
              <Image src={logo} alt="Site Logo" />
            </Link>
            <ul className="hidden md:flex  items-center  h-full text-[14px]">
              {MAIN_MENU.map((item) => (
                <li className="mx-3" key={item.title}>
                  <Link
                    href={item.path}
                    className={`${
                      pathname === item.path
                        ? "underline underline-offset-[1.2rem] decoration-4 decoration-[var(--main-color)]"
                        : ""
                    } hover:underline underline-offset-[1.2rem] decoration-4 decoration-[var(--main-color)]`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <IoMdMenu
            onClick={handleOpenMenu}
            className="text-3xl mx-4 cursor-pointer md:hidden"
          />
        </div>
      </div>

      <MobileHeader openMenu={setOpenMenu} isOpened={openMenu} />
    </>
  );
}
