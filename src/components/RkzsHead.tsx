import React from "react";
import { BackgroundLines } from "./ui/backgrouund-lines";
import { Globe1 } from "./ui/globe1";
import WordPullUp from "./ui/word-pull-up";

export function RkzsHead() {
  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        <WordPullUp
      className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
      words="RKZS SKILL COMUNICATION PVT. LTD."
    />
        </h2>
        <h3 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl md:text-2xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        A STEP TOWARDS DIGITAL LITERACY
        </h3>
        <hr />
        <center>
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              RKZS
            </span>
            <Globe1 className="top-28" />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
          </div>
        </center>
        <br />
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          We are a team of passionate individuals who believe in the power of digital literacy. Our mission is
          to empower individuals and communities with the skills and knowledge they need to thrive in the digital
          age.
        </p>
      </BackgroundLines>
    </>
  );
}
