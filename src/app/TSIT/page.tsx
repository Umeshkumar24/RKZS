'use client'

import { Globe } from "@/components/Globe";
import { Scroll } from "@/components/Scroll";
import Slider from "@/components/Slider";
import { Brand } from "@/components/Brand";
import { Accreditins } from "@/components/Accreditins";
import { Accordion1 } from "@/components/Accordion";
import { Feature } from "@/components/Feature";
import { Subscribe } from "@/components/Subscribe";
import Logo_c from "@/components/Logo_c";

export default function Home() {
  return (
    <>
      <Brand />
      <center>
        <div className="m-10 p-10 ml-24 bg-white rounded shadow">
          <Logo_c/>
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            Welcome to Tech-Siddhi Institute of Trainings and Innovation
          </h1>
          <hr />
          <p>
            Tech Siddhi was started in the year 2019 with an aim to provide a platform where students can learn, grow and fulfill their essential technical requirements.
          </p>
        </div>
      </center>
      <Feature />
      <Slider />
      <center>
        <div className="m-10 p-10 ml-24 bg-white rounded shadow">
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            FAQs
          </h1>
        </div>
      </center>
      <Accordion1 />
      <Globe />
      <center>
        <div className="m-10 p-10 ml-24 bg-white rounded shadow">
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            Our courses are provided and designed by
          </h1>
        </div>
      </center>
      <Accreditins />
    </>
  );
}
