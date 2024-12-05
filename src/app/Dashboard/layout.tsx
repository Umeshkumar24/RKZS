import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar1 } from "@/components/Sidebar1";
import { Navbar1 } from "@/components/Navbar1";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard RKZS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang='en'>
      <Navbar1/>
      <body className={inter.className}>{children}</body>
      <Footer/> 
      </html>
  )
}
