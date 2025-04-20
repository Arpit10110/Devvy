import { Link } from "react-router-dom"
import heroIcon1 from "../assets/heroIcon1.png"
import heroIcon2 from "../assets/heroIcon2.png"
import heroIcon3 from "../assets/heroIcon3.png"
import heroIcon4 from "../assets/heroIcon4.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
const Herosection = () => {

    interface carddata{
        id: number,
        title: string,
        description: string,
        icon:string
    }

    const card : carddata[] =[
        {
            id:1,
            title:"Live Coding",
            description:"Real-time competitions",
            icon:heroIcon1
        },
        {
            id:2,
            title:"AI-Powered",
            description:"AI-generated questions",
            icon:heroIcon2
        },
        {
            id:3,
            title:"Competitions",
            description:"Win real cash prizes",
            icon:heroIcon3
        },
        {
            id:4,
            title:"Community",
            description:"Global network",
            icon:heroIcon4
        }

    ]

    useEffect(() => {
        AOS.init();
    }, [])
    

  return (
   <>
      <div className='flex justify-center items-center ' >
            <div className='mt-[5rem]  w-[90%] ' >
                <div  className='flex flex-col justify-center items-center gap-[1.5rem] ' >
                    <h1 data-aos="fade-down" data-aos-duration="1500"  className='text-[4rem] font-tektur font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent ' >Where Coders Clash & Legends Rise</h1>
                    <p data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="500" className='w-[70%]  text-center text-[1.7rem]  ' >Squad up with your friends, pick a contest, and let AI throw real DSA heat your way.
                    Win points, flex on the leaderboard, and turn your code into cash and clout.</p>
                </div>
                <div className="flex w-full justify-around items-center mt-[4rem]   " >
                    {
                        card.map((i)=>{
                            return(
                                <div data-aos="flip-left" data-aos-duration="2500" data-aos-delay="800" className="flex flex-col justify-center items-center  gap-[5px] w-[20%] py-[1rem] rounded-[1rem] bg-[#ffffff13] hover:scale-[1.02] transition-all cursor-pointer "  key={i.id} >
                                    <img className="w-[25%]" src={i.icon} alt="Devvy" />
                                    <h2 className="text-[2rem] font-semibold text-center " >{i.title}</h2>
                                    <h3 className="text-[1.5rem] text-center" >{i.description}</h3>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex w-full justify-center gap-[2rem] items-center mt-[4rem] " >
                    <Link data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="1000" to="/contest" className=' text-[2rem] font-semibold px-[3rem] py-[1rem] rounded-[1rem] hover:scale-[1.0 transition-all cursor-pointer bg-[#0f5f3a] ' > ⚔️ Join the Battle</Link>
                    <Link data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="1000" to="/" className=' bg-[#ffffff13] text-[2rem] font-semibold px-[3rem] py-[1rem] rounded-[1rem] hover:scale-[1.02] transition-all cursor-pointer ' >🎥 Watch Demo</Link>
                </div>
            </div>
      </div>
   </>
  )
}

export default Herosection