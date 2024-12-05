'use client'
import "./style.css";
import { useRef } from "react";
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useScroll } from "framer-motion";

export default function Slider1() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
      <section className="m-10">
        <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
        <ol ref={ref} className="slider">
          <li>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={"/pc2.jpg"} alt="Image 2" width={600} height={400} />
              </div>
            </Card>
          </li>
          <li>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={"/pc3.jpg"} alt="Image 2" width={600} height={400} />
              </div>
            </Card>
          </li>
          <li>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={"/pc4.jpg"} alt="Image 2" width={600} height={400} />
              </div>
            </Card>
          </li>
          <li>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={"/pc5.jpg"} alt="Image 2" width={600} height={400} />
              </div>
            </Card>
          </li>
          <li>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={"/pc6.jpg"} alt="Image 2" width={600} height={400} />
              </div>
            </Card>
          </li>
        </ol>
      </section>
    </>
  );
}