"use client";
import { GoogleTranslate } from "../language-translate/language";

export default function MiniHeader({ prefLangCookie }) {
  return (
    <div className="bg-[rgb(252,186,3,1)] h-[1.7rem] text-[10px] flex items-center justify-end  ">
      <div></div>
      <div className="mr-5 flex">
        <span translate="no" className="md:mr-5">
          office@steeltech.store
        </span>
        <span className="hidden md:block">072 - 824 - 0023</span>
      </div>
      <div className="hidden md:block">
        <GoogleTranslate prefLangCookie={prefLangCookie} />
      </div>
    </div>
  );
}
