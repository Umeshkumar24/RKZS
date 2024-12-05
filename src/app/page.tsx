// 'use client'
import { Mac } from "@/components/Mac";
import Join from "@/components/Join";
import { Light } from "@/components/Light";
import { Back } from "@/components/Back";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image"
import { Logos } from "@/components/Logos";
import Slider4 from "@/components/Slider4";

export default function Home() {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <Join />
      </BackgroundBeamsWithCollision>
      <Logos/>
      {/* <Image src={"/banner.jpg"} alt="Banner" width={1800} height={1200} /> */}
      <Slider4/>
      <Light />
    </>
  );
}
