import type { Metadata } from "next";
import {Navbar1} from "@/components/Navbar1";

export const metadata: Metadata = {
  title: "RKZS | Auth",
  description: "RKZS Auth",
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
      </html>
  )
}

