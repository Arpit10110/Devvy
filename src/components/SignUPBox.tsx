import { useState } from "react"
import { Link } from "react-router-dom"
import GoogleIcon from '@mui/icons-material/Google';
import {useGoogleLogin } from '@react-oauth/google';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
interface signupdatatype{
    name:string,
    email:string,
    password:string
}
const SignUPBox = () => {
    const navigate = useNavigate()
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [open, setOpen] = useState(false);

    const createuser = async(e:any)=>{
        setOpen(true)
        try {
            e.preventDefault()
           const sentdata:signupdatatype = {
            name:Name,
            email:Email,
            password:Password
           }
           const {data} = await axios.post(`${import.meta.env.VITE_HOST}/signup`,sentdata,{
            withCredentials: true,
           })
           console.log(data)
           if(data.success){
            setOpen(false)
            navigate("/login")
           }else{
            setOpen(false)
            toast.warn(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
           }
        } catch (error) {
            console.log(error)
            setOpen(false)
        }
    }

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            
        },
        onError: () => {
            console.log("Google login failed");
        },
    });

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        <div className="flex justify-between items-center " >
            <form onSubmit={createuser} className="bg-[#ffffff20] w-[50%] m-auto mt-[10rem] p-[1rem] rounded-[1rem] flex flex-col gap-[1rem] items-center " >
                <div className="w-full flex flex-col gap-[0.5rem] " >
                    <h2 className="text-[1.5rem] font-semibold " >Name</h2>
                    <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} className="text-black bg-white text-[1.5rem] p-[0.3rem] rounded-[0.5rem] " required/>
                </div>
                <div className="w-full flex flex-col gap-[0.5rem] " >
                    <h2 className="text-[1.5rem] font-semibold " >Email</h2>
                    <input type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} className="text-black bg-white text-[1.5rem] p-[0.3rem] rounded-[0.5rem] " required/>
                </div>
                <div className="w-full flex flex-col gap-[0.5rem] " >
                    <h2 className="text-[1.5rem] font-semibold " >Password</h2>
                    <input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} className="text-black bg-white text-[1.5rem] p-[0.3rem] rounded-[0.5rem] " required/>
                </div>
                    <div  className="flex justify-center  gap-[1rem] " >
                <button className="bg-[#7a05ce]  text-[1.5rem] px-[0.8rem] py-[0.4rem] rounded-[0.5rem] hover:scale-[1.03] transition-all cursor-pointer font-bold "  type="submit" >Create Account</button>
                <p className="bg-gray-700 text-[1.5rem] px-[0.8rem] py-[0.4rem] rounded-[0.5rem] hover:scale-[1.03] transition-all cursor-pointer font-semibold flex items-center gap-[5px] " onClick={()=>handleGoogleLogin()} >
                    <GoogleIcon/> SignUp with Google
                </p>
                </div>
                <h2 className="text-[1.5rem] font-semibold " >Already have account...<Link to="/login" className="text-blue-500" >Login</Link></h2>
            </form>
        </div>'
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
 
    </>
  )
}

export default SignUPBox