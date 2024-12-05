import ShineBorder from "./ui/shine-border";
import { motion } from "framer-motion"
import { AuroraBackground } from "@/components/ui/aurora-background";

export function WhyUs() {
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
                    <ShineBorder
                        className="relative flex h-[500px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    >
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
                                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                                    Why Us ?
                                </span>
                                <p>
                                    At RKZS Skill Communication Pvt Ltd, we are committed to empowering individuals with cutting-edge computer education and skills. Our franchise model offers a unique blend of comprehensive curriculum, state-of-the-art infrastructure, and unparalleled support. By partnering with us, you gain access to our extensive experience in the education sector, a proven track record of success, and a robust network of industry connections. We provide continuous training, marketing assistance, and operational guidance to ensure your institute thrives. Join us in our mission to bridge the digital divide and create a brighter future for the next generation of IT professionals.
                                </p>
                            </motion.div>
                        </AuroraBackground>
                    </ShineBorder>
                </motion.div>
                <div className="m-50"></div>
            </AuroraBackground>
        </>
    );
}

