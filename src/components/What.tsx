import React from "react";
import { Vortex } from "./ui/vortex";
import { Link } from "lucide-react";
import { Jockey_One } from "next/font/google";
import Join from "./Join";

export function What() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-full">
      <Vortex
        backgroundColor="black"
        rangeY={1200}
        particleCount={500}
        baseHue={100}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >  <div className="200px"></div>
        <h2 className="text-white text-2xl md:text-6xl font-bold text-cente mt-5">
          What are you waiting for ?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Contact now to avail a surprise gift from us on collaborating.
        </p>
        {/* <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            <Link href="/Signup"></Link>
            Join Now
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div> */}
        <Join/>
      </Vortex>
    </div>
  );
}
