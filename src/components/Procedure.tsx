"use-client"
import HeroVideoDialog from "./ui/hero-video-dialog";
import React from "react";
import { NeonGradientCard } from "./ui/neon-gradient-card";

export function Procedure() {
    return (
        <>
            <center>
                <NeonGradientCard className="max-w-lg items-center justify-center text-center">
                    <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                        Watchout for the full registration Process
                    </span>
                    <br />
                    <hr />
                    <br />
                    <hr />
                    <br />
                    <div className="relative">
                        <HeroVideoDialog
                            className="dark:hidden block"
                            animationStyle="top-in-bottom-out"
                            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                            thumbnailAlt="Hero Video"
                        />
                        <HeroVideoDialog
                            className="hidden dark:block"
                            animationStyle="top-in-bottom-out"
                            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                            thumbnailAlt="Hero Video"
                        />
                    </div>
                </NeonGradientCard>
            </center>
        </>
    );
}

