import type { Metadata } from "next";
import {Navbar1} from "@/components/Navbar1";

export const metadata: Metadata = {
  title: "TSIT | Materials",
  description: "Techsiddhi Materials",
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

