import localFont from "next/font/local";
import "./globals.css";
import MainHeader from "@/components/header/main-header";
import MiniHeader from "@/components/header/mini-header";
import MainFooter from "@/components/footer/main-footer";
import MobileHeader from "@/components/header/mobile-header";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "SteelTech Industry",
  description: "Tehnologii performante de prelucrare a otelului! ",
  icons: {
    icon: "./icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="auto">
      <body className=" grid-layout">
        <MainHeader />
        <main className="content">{children}</main>
        <MainFooter />
        <MobileHeader />
      </body>
    </html>
  );
}
