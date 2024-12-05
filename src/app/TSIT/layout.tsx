import type { Metadata } from "next";
import { Navbar1 } from "@/components/Navbar1";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "RKZS | Home",
  description: "Techsiddhi home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Navbar1 />
      <body>
        <div className="app">
          {children}
        </div>
      </body>
      <Footer/>
    </html>
  )
}

