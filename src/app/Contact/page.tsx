'use client'

import { Features } from "@/components/Features";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { What } from "@/components/What";
import { Why } from "@/components/Why";
import { WorldMap1 } from "@/components/WorldMap1";

export default function Home() {
  return (
    <>
       <WorldMap1 />
       <BackgroundBeams />
       <Why />
       <BackgroundBeams/>
       <Features />
       <BackgroundBeams/>
       <What/>
    </>
  );
}
