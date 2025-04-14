import { Link } from "react-router-dom"
import Logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <>
    <nav className="bg-[#020326] py-[1rem] px-[2rem] flex items-center justify-between " >
        <div className="w-[5%]" >
            <img src={Logo} alt="Davvy" className="w-full" />
        </div>
        <div className="flex gap-[3rem] text-[1.5rem] font-semibold " >
            <Link  className="hover:scale-[1.04] transition-all hover:text-purple-400 "  to="/" >Home</Link>
            <Link  className="hover:scale-[1.04] transition-all hover:text-purple-400 "  to="/contest" >Contest</Link>
            <Link  className="hover:scale-[1.04] transition-all hover:text-purple-400 "  to="/rewards " >Rewards </Link>
            <Link  className="hover:scale-[1.04] transition-all hover:text-purple-400 "  to="/how-it-works " >How It Works  </Link>
        </div>
        <div className="flex gap-[2rem] text-[1.5rem] font-semibold items-center ">
            <Link to="/login"  className="bg-black border-[2px] px-[0.8rem] py-[0.3rem] rounded-[0.5rem] border-[#9400FE] hover:scale-[1.04] transition-all  " >LogIn</Link>
            <Link to="/signup"  className="px-[0.8rem] py-[0.3rem] rounded-[0.5rem] bg-[#7a05ce] hover:scale-[1.04] transition-all  " >Sign Up</Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar