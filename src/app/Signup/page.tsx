'use client'
import { Mac } from "@/components/Mac";
import Join from "@/components/Join";
import { motion } from "framer-motion"
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Signup } from "@/components/Signup"
import Logo_rkzs from "@/components/Logo_rkzs";
export default function Home() {
  return (
    <>
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
        <Logo_rkzs width={450} height={450}/>
        <Signup/>
        </motion.div>
      </AuroraBackground>
    </>
  );
}
