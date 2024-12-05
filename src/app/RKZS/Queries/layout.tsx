import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Navbar1} from "@/components/Navbar1";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RKZS | Blogs",
  description: "RKZS Blogs",
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
      </html>
  )
}
