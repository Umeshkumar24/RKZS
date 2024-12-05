import type { Metadata } from "next";
import {Navbar1} from "@/components/Navbar1";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
export const metadata: Metadata = {
  title: "RKZS | About",
  description: "About RKZS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang='en'>
      <Navbar1/>
      <body>{children}</body>
      <Footer/>
      </html>
  )
}
