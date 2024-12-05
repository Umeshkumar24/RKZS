import { Courses } from "@/components/Courses";
import { Feature } from "@/components/Feature";
import Logo_rkzs from "@/components/Logo_rkzs";
import { Logos } from "@/components/Logos";
import Slider4 from "@/components/Slider4";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import LetterPullup from "@/components/ui/letter-pullup";
import { WhyUs } from "@/components/WhyUs";


export default function Home() {
  return (
    <>
      <BackgroundBeamsWithCollision>
      <Logo_rkzs width={450} height={450}/>
      </BackgroundBeamsWithCollision>
      <Feature />
      <Slider4/>
      <div>
        <center>
          <LetterPullup words={"We are associated and affiliated with"} delay={0.05} />;
        </center>
      </div>
      <h2></h2>
      <Logos />
      <Courses />
    </>
  );
}
