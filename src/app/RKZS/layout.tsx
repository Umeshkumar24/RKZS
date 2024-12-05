import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavbarFloat } from "@/components/NavbarFloat";
import { Navbar2 } from "@/components/Navbar2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RKZS | Partner",
  description: "RKZS Franchise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Navbar2/>
      <body className={inter.className}>{children}</body>
      <NavbarFloat/>
      </html>
  )
}
