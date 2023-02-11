import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LoadingButton from '@mui/lab/LoadingButton';
import {useState} from "react"
import {singInWithEmailAndPassword} from "@/services/auth/provider"
import { useRouter } from 'next/router';
import { userReducer , app_statusReducer } from '@/store';
import {style} from "@/static/tailwind"
//this is for testting 




function Login() {


  //handelling the routing
  const router = useRouter()
  //@ts-ignore
  const setUser = userReducer(state => state.setUser)

  
  

  const [isLoading , setIsLoading] = useState<boolean>(false)

  const [email , setEmail] = useState<string>()
  const [password , setPassword] = useState<string>()

  const handleSubmit = () => {
    
    setIsLoading(true)
    if(!email || !password){
      console.error("password or email is undefined")
      setIsLoading(false)
      return
    }
    singInWithEmailAndPassword(email , password).then(  (user) => {

     router.push("/app")
     setIsLoading(false)
     window.location.reload()

      setIsLoading(false)
     console.log("not authorized")
    }).catch((err) => console.error(err))
    
  }

  return (
    <div className='w-[30%] md:w-[45%] h-[90%] shadow-xl rounded-lg bg-white '>
    <h1 className='text-lg  text-center my-8 font-bold'>log in to your account</h1>

      {/* here is our providers */}
    <div className ="px-4">
        <button className ="w-full py-3 my-2 px-4 font-bold group text-red-500  bg-white border text-green  border-gray-600 rounded   hover:bg-red-500 hover:text-white transition-all  ">
          
        <GoogleIcon className='text-red-500 mr-4 group-hover:text-white ' />
          log in with Google
        </button>
    </div>
      <div className ="px-4">
      <button className ="w-full py-3 px-2 my-2 font-bold group text-blue-700 bg-white border border-gray-600 rounded hover:bg-blue-700 hover:text-white transition-all ">
        <FacebookIcon className='text-blue-600 group-hover:text-white mr-4' />
        log in with facebook
        </button>
      </div>

    {/* and this is the normal form */}
    <h1 className='text-lg  text-center my-4 font-bold'>or use your email and password</h1>

    <form className='w-full flex flex-col px-2  '>
      <label className='my-2'>your email</label>
      <input type="email" className={style.input}  onChange={(event) => setEmail(prev => prev = event.target.value)} />
      <label  className='my-2'>your password</label>
      <input type="password"   className={style.input} onChange={(event) => setPassword(prev => prev = event.target.value)} />
      <div className='w-full my-3 flex justify-center items-center h-[70px]'>
    
      <LoadingButton
      className="rounded !w-[70%]  !text-white !text-lg bg-gradient-to-r from-sky-500 to-indigo-600"
     loading = {isLoading ? true : false}
     loadingPosition="start"
     onClick={handleSubmit}
     variant="contained"
 
     >
     {isLoading ? "proceeding" :  "log in" }
      </LoadingButton>
      </div>


     
    </form>
  
    
    </div>
  )
}

export default Login