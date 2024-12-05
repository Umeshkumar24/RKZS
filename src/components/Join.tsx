"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import Image from "next/image"
import Logo_rkzs from "./Logo_rkzs";

export default function Join() {
  const words = [
    {
      text: "Learn",
      className: "text-blue-500 dark:text-white-500",
    },
    {
      text: "For",
      className: "text-blue-500 dark:text-white-500",
    },
    {
      text: "a",
      className: "text-blue-500 dark:text-white-500",
    },
    {
      text: "Leap",
      className: "text-blue-500 dark:text-white-500",
    },
    {
      text: "@",
      className: "text-green-500 dark:text-white-500",
    },
    {
      text: "RKZS SKILL",
      className: "text-black-500 dark:text-blue-500",
    },
    {
      text: "COM",
      className: "text-red-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <Logo_rkzs width={500} height={500} />
      {/* <Image src={"/rkzs.jpg"} alt="RKZS logo" width={350} height={350} /> */}
      <div></div>
      <p className="text-neutral-600 dark:text-neutral-200 text-md md:text-base  ">
        
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          <Link href="/TSIT">
            Join now
          </Link>
        </Button>

        <Button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          <Link href="/RKZS">
            Team Up
          </Link>
        </Button>

        <Button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          <Link href="/Signup">
            Sign Up
          </Link>
        </Button>
      </div>
    </div>
  );
}
