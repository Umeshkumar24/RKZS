import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons:"./favicon.ico",
  title: "RKZS",
  description: "Techsiddhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
    <body>
      <header>
        <Navbar />
      </header>
      <div className="app">
        {children}
      </div>
      <footer>
        <Footer/>
      </footer>
    </body>
  </html>
  )
}
