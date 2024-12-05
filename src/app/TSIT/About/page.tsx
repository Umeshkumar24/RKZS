'use client'
import { Mac } from "@/components/Mac";
import Join from "@/components/Join";
import { motion } from "framer-motion"
import { AuroraBackground } from "@/components/ui/aurora-background";
import Slider from "@/components/Slider";
import { Location } from "@/components/Location";
import { Scroll } from "@/components/Scroll";
import { Graph } from "@/components/Graph";
import Slider1 from "@/components/Slider1";

export default function Home() {
  return (
    <>
      <Scroll />
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
        </motion.div>
        <Location />
        <div className="m-30"></div>
      </AuroraBackground>
      <center>
      <div className="m-10 p-10 ml-24 bg-white rounded shadow">
        <h1 className="text-4xl font-semibold text-black dark:text-white">
          Our Growth <br />
        </h1>
      </div>
      </center>
      <Graph />
      <Slider1/>

    </>
  );
}
