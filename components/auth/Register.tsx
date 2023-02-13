import {useState} from 'react'
import { createUserWithEmailAndPassword } from '@/services/auth/provider';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Button} from '@mui/material'
import { useRouter } from 'next/router';
import {userReducer} from "@/store"
import {style} from "@/static/tailwind"
import { ID } from '@/static/types';



  //to do handle redirect users to confirmed thier email
  

function Register() {
  //graphing the data
  const [password , setPassword] = useState<string>()
  const[confirmedPassword , setConfirmedPassword] = useState<string>()
  const [email , setEmail] = useState<string>()

  //getting the router object
  const router = useRouter()

  //getting the user data and function to set it up
  //@ts-ignore 
  const set_user = userReducer(state => state?.set_user_id)



  const handleSubmit = () => {
    if(!email || !password){
      console.error("email or password is undefined")
      return
    }
    if(password !== confirmedPassword){
      console.error("password should match")
      return
    }

    createUserWithEmailAndPassword(email , password).then((res => {
      
      set_user(res?.id as ID)
      router.push("/auth/moreDetails")
    })).catch(err => console.error(err))

    
  }



  return (
    <div className='w-[30%] md:w-[50%] h-[95%] shadow-xl rounded-lg bg-white '>
    <h1 className='text-xl  text-center my-2 font-bold'>create an account</h1>

   

    <form className='w-full flex flex-col px-2  '>
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
      className="rounded !w-[70%]  !text-lg bg-gradient-to-r from-sky-500 to-indigo-600" >
        submit my account
      </Button>
      </div>


     
    </form>
    
      {/* here is our providers */}
      <h1 className='text-lg  text-center my-2 font-bold'>or use our providers</h1>
      <div className ="px-4">
        <button className ="w-full py-3 my-2 px-4 font-bold group text-red-500  bg-white border text-green  border-gray-600 rounded   hover:bg-red-500 hover:text-white transition-all  ">
          
        <GoogleIcon className='text-red-500 mr-4 group-hover:text-white ' />
          continue with google
        </button>
    </div>
      <div className ="px-4">
      <button className ="w-full py-3 px-2 my-2 font-bold group text-blue-700 bg-white border border-gray-600 rounded hover:bg-blue-700 hover:text-white transition-all ">
        <FacebookIcon className='text-blue-600 group-hover:text-white mr-4' />
        continue with  facebook
        </button>
      </div>

    {/* and this is the normal form */}
    
    </div>
  )
}

export default Register