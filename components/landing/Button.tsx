import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import CallMadeIcon from '@mui/icons-material/CallMade';
import React from 'react'


function Button() {

    const router =   useRouter()


  return (
    <div className='w-full h-[70px] flex justify-start my-4 mt-8 '>
    
        <button 
         onClick={() => router.push("/auth/register")}
        className='w-[300px]  shadow-xl flex items-center justify-center gap-x-4 h-[60px] p-4 font-bold text-2xl text-blue-500 bg-white rounded-full'>
        try for free 
        <CallMadeIcon className='w-12 h-10  bg-sky-500 !text-white rounded-full  !font-bold'/>
        </button>
    
    </div>
  )
}

export default Button