'use client'
import { RkzsHead } from "@/components/RkzsHead";
import { Courses } from "@/components/Courses";
import { PartnerSteps } from "@/components/PartnerSteps";
import { motion } from "framer-motion"
import { AuroraBackground } from "@/components/ui/aurora-background";
import { WhyUs } from "@/components/WhyUs";
import { Procedure } from "@/components/Procedure";
import Logo_rkzs from "@/components/Logo_rkzs";

export default function Home() {
  return (
    <>
      <RkzsHead/>
      <Logo_rkzs width={500} height={500} />
      <Courses/>
      <center>
      <PartnerSteps/>
      </center>
      <WhyUs/>
      <Procedure/>
    </>
  );
}
