"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Logo1 from "./Logo1";
import Logo_c from "./Logo_c";

export function Location() {
  return (
    <>
      <center>
        <div className="m-10 p-10 ml-24 bg-white rounded shadow">
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            Location <br />
            <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-none">
              We are here
            </span>
          </h1>
        </div>
      </center>
      <div className="h-[50rem] w-full flex items-center justify-center ">
        <PinContainer
          title="techsiddhi.in"
          href=""
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <center>
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                {/* <Logo1/> */}
                <Logo_c />
                TSIT
              </h3>
            </center>
            {/* <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div> */}
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.8298573135266!2d87.14688230837245!3d21.74812086260483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1ce11b126c8e29%3A0x24d5ed55111c4a70!2sCIMIT%20Vellora!5e0!3m2!1sen!2sin!4v1712065078415!5m2!1sen!2sin" ></iframe>
            </div>
          </div>
        </PinContainer>
      </div>
    </>
  );
}
