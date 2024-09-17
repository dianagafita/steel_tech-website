"use server";
import { cookies } from "next/headers";

export const getPrefLangCookie = () => {
  return cookies().get("googtrans")?.value ?? "ro";
};
