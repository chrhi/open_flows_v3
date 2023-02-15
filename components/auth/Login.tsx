import LoadingButton from '@mui/lab/LoadingButton';
import {useState} from "react"
import {singInWithEmailAndPassword} from "@/services/auth/provider"
import { useRouter } from 'next/router';
import { userReducer , app_statusReducer } from '@/store';
import {style} from "@/static/tailwind"




export default function Login() {
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
    <div className='w-[90%] p-4 sm:w-[30%] md:w-[35%] h-[400px] shadow-xl rounded-lg bg-white '>
 
    {/* and this is the normal form */}
    <h1 className='text-lg  text-start ml-2 my-4 font-bold'>use your email and password to sign in</h1>
    <form className='w-full flex flex-col px-2  '>
      <label className='my-2'>your email</label>
      <input type="email" required className={style.input}  onChange={(event) => setEmail(prev => prev = event.target.value)} />
      <label  className='my-2'>your password</label>
      <input type="password" required   className={style.input} onChange={(event) => setPassword(prev => prev = event.target.value)} />
      <div className='w-full my-3 flex justify-center items-center h-[70px]'>
      <LoadingButton
      className="rounded !w-[70%]   !text-white !text-lg bg-gradient-to-r from-sky-500 to-indigo-600"
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

