import Marquee from "react-fast-marquee";

const Marqueee = () => {
  return (
   <>
    <div className="my-[7rem] p-[2rem] bg-[#ffffff13] cursor-pointer " >
        <Marquee speed={100} gradient={false}>
        <h1 className="mx-[4rem] text-[3rem] whitespace-nowrap">
            🔥 Outcode or Get Outcoded
        </h1>
        <h1 className="mx-[4rem] text-[3rem] whitespace-nowrap">
            🧢 Real Devs, No Cap
        </h1>
        <h1 className="mx-[4rem] text-[3rem] whitespace-nowrap">
            💰 Stack Points, Get Drip
        </h1>
        <h1 className="mx-[4rem] text-[3rem] whitespace-nowrap">
            🎮 Coding is the New Game
        </h1>
        <h1 className="mx-[4rem] text-[3rem] whitespace-nowrap">
            🚀 Launch Your Dev Era
        </h1>
        <h1 className="mx-[4rem] text-[3rem] whitespace-nowrap">
            🧠 Smarter, Faster, Cleaner
        </h1>
        </Marquee>

    </div>
   </>
  )
}

export default Marqueee