import { useState } from "react"
import { Link } from "react-router-dom"

const Loginbox = () => {

        const [Email, setEmail] = useState("")
        const [Password, setPassword] = useState("")
    
        const createuser = async(e:any)=>{
            try {
                e.preventDefault()
                console.log(Email)
                console.log(Email)
            } catch (error) {
                console.log(error)
    
            }
        }
    
  return (
    <>
         <div className="flex justify-between items-center " >
            <form onSubmit={createuser} className="bg-[#ffffff20] w-[50%] m-auto mt-[10rem] p-[1rem] rounded-[1rem] flex flex-col gap-[1rem] items-center " >
                <div className="w-full flex flex-col gap-[0.5rem] " >
                    <h2 className="text-[1.5rem] font-semibold " >Email</h2>
                    <input type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} className="text-black bg-white text-[1.5rem] p-[0.3rem] rounded-[0.5rem] " />
                </div>
                <div className="w-full flex flex-col gap-[0.5rem] " >
                    <h2 className="text-[1.5rem] font-semibold " >Password</h2>
                    <input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} className="text-black bg-white text-[1.5rem] p-[0.3rem] rounded-[0.5rem] " />
                </div>
                <button className="bg-[#7a05ce] text-[1.5rem] px-[0.8rem] py-[0.4rem] rounded-[0.5rem] hover:scale-[1.03] transition-all cursor-pointer font-semibold "  type="submit" >Login</button>
                <h2 className="text-[1.5rem] font-semibold " >Create new Account...<Link to="/signup" className="text-blue-500" >SignUp</Link></h2>
            </form>
        </div>
    </>
  )
}

export default Loginbox
