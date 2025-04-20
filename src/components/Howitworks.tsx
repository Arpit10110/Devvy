import { useEffect } from "react";
import Howitworks1 from "../assets/howitworkImag1.png";
import Howitworks2 from "../assets/howitworkImag2.png";
import Howitworks3 from "../assets/howitworkImag3.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
interface Step {
  title: string;
  description: string;
  image: string;
  direction: "left" | "right";
}

const Howitworks = () => {
    const steps: Step[] = [
        {
          title: "👤 Create Your Devvy ID",
          description:
            "Sign up, set your vibe, and invite your homies. This is your launchpad to the wildest coding arena on the internet. 🚀🔥 The journey begins when you build your Devvy profile, connect with friends, and prepare to get competitive. The coding world is your oyster, and it's time to crack it open!",
          image: Howitworks1,
          direction: "left",
        },
        {
          title: "⚔️ Jump Into Contests",
          description:
            "Free or paid — your choice. Battle your friends in AI-powered DSA matches and show 'em who’s got the real dev juice. 🧠💥 Choose your battlefield, and get ready for some serious action. Whether you’re coding for glory, cash, or just fun, the contests are always lit with competition!",
          image: Howitworks2,
          direction: "right",
        },
        {
          title: "🏆 Win Cash, Points & Respect",
          description:
            "Snag cash in paid contests or stack points for free ones. Trade 'em for merch or flex your name on the leaderboard. No Ls here, only levels. 💰👕📈 Whether you win or lose, you’re always leveling up with every contest. Earn respect, points, and rewards that’ll make you the envy of all devs!",
          image: Howitworks3,
          direction: "left",
        },
      ];

      useEffect(() => {
        AOS.init();
      }, [])
      
      

  return (
    <>
      <div className="mb-[8rem]" >
      <div className='flex justify-center items-center' >
        <h1 className="text-[4rem] ml-[2rem]  font-tektur font-bold bg-gradient-to-r from-cyan-500 via-violet-500 to-violet-500 bg-clip-text text-transparent w-fit">
          How Devvy Works
        </h1>
      </div>
        <div className="mt-[5rem] flex flex-col gap-[8rem] " >
            {steps.map((step, index) => (
            <div
                key={index}
                className={`flex  w-[90%] m-auto justify-between    ${step.direction === "left" ? "flex-row" : "flex-row-reverse"} `}
            >
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"  className="w-[40%]">
                    <img src={step.image} alt="" className="w-full h-[50vh] object-cover rounded-[1rem] " />
                </div>
                <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="w-[50%] flex flex-col gap-[1rem] items-center ">
                    <h2 className="text-[3.4rem] font-bold text-[#4bccf0] font-tektur ">{step.title}</h2>
                    <p className="text-[2rem] text-justify ">{step.description}</p>
                </div>
            </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Howitworks;
