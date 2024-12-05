"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "./ui/animated-list";
import LetterPullup from "./ui/letter-pullup";
import { motion } from "framer-motion"
import { AuroraBackground } from "@/components/ui/aurora-background";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "PGDCA",
    description: "Advanced",
    time: "16 months",
    icon: "👤",
    color: "#00C9B5",
  },
  {
    name: "Advanced DCA",
    description: "Advanced",
    time: "12 months",
    icon: "👤",
    color: "#00C9A7",
  },
  {
    name: "DCA",
    description: "Moderate",
    time: "10 months",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "BCC",
    description: "Beginner",
    time: "3 months",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "CCA",
    description: "Beginner",
    time: "5 months",
    icon: "👤",
    color: "#1E86FF",
  },
  {
    name:"OS-CIT",
    description: "Beginner",
    time: "2-3 months",
    icon: "💬",
    color: "#F13B71",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function Courses({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className,
      )}
    >
      <div>
        <center>
          <LetterPullup words={"Courses By Us"} delay={0.05} />;
        </center>
      </div>

      <AnimatedList>
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
          {/* <div className="m-30"></div> */}
        </AuroraBackground>
        {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
      </AnimatedList>
    </div>
  );
}
