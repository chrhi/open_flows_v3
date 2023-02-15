import {useState} from 'react'
import { createUserWithEmailAndPassword } from '@/services/auth/provider';
import { Button} from '@mui/material'
import { useRouter } from 'next/router';
import {userReducer} from "@/store"
import {style} from "@/static/tailwind"
import { ID } from '@/static/types';

function Register() {
  //graphing the data
  const [password , setPassword] = useState<string>()
  const[confirmedPassword , setConfirmedPassword] = useState<string>()
  const [email , setEmail] = useState<string>()
  const [error , setError] = useState<boolean | string>(false)

  //getting the router object
  const router = useRouter()

  //getting the user data and function to set it up
  //@ts-ignore 
  const set_user = userReducer(state => state?.set_user_id)



  const handleSubmit = () => {
    setError(false)
    if(!email || !password){
    
      setError("email and password is required")
      return
    }
    if(password !== confirmedPassword){
      setError("password should match")
      return
    }

    createUserWithEmailAndPassword(email , password).then((res => {
      
      set_user(res?.id as ID)
      router.push("/auth/moreDetails")
    })).catch(err => console.error(err))

    
  }



  return (
    <div className='md:w-[40%] w-[90%] h-[420px] p-4 shadow-xl rounded-lg bg-white '>
    <h1 className='text-xl  text-start my-2 font-bold'>SIGN UP</h1>

   

    <form className='w-full flex flex-col px-2  '>
    {error && <h1 className='text-red-500 text-lg text-center'>{error}</h1>}
      <label className='my-2'>your email</label>
      <input type="email" className={style.input} onChange={(event) => setEmail(prev => prev = event.target.value)} />
   
      <label  className='my-2'>your password</label>
      <input type="password"   className={style.input} onChange={(event) => setPassword(prev => prev = event.target.value)} />
      <label  className='my-2'>confirmed password</label>
      <input type="password"   className={style.input}  onChange={(event) => setConfirmedPassword(prev => prev = event.target.value)} />
     
      <div className='w-full mt-3 mb-1 flex justify-center items-center h-[70px]'>
      <Button 
      onClick={handleSubmit}
      variant="contained"  
      className="rounded w-[90%] md:!w-[60%]  !text-lg bg-gradient-to-r from-sky-500 to-indigo-600" >
        submit my account
      </Button>
      </div>


     
    </form>
    
      
    
    </div>
  )
}

export default Register