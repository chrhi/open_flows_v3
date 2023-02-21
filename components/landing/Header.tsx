import { Fab } from '@mui/material'
import { useRouter } from 'next/router'
import logowhite from "@/images/logowhite.png"
import Image from 'next/image'
import React from 'react'

function Header() {

  const router =   useRouter()

  //bg-gradient-to-r from-sky-500 to-indigo-600

  return (
    <header className='w-full h-[70px] flex  lg:justify-between items-center pt-12 bg-gradient-to-r from-sky-400  to-indigo-600'>
        <div className='flex w-[30%]   items-center mt-2 gap-x-2 h-full pl-12 '>
          <Image  
            src={logowhite}
            alt="logo"
            width={80}
            height={80}
            className='mb-4'
          />
       
        </div>
        <div className='lg:flex w-[40%] h-full items-center justify-center gap-x-4 hidden'>
          <a className ="text-white text-lg font-bold   cursor-pointer" href='#features' >Features</a>
          <a  className ="text-white text-lg font-bold    cursor-pointer " href='#whyOpenFlow' >why OpenFlows?</a>
          <a  className ="text-white text-lg font-bold  cursor-pointer " href='#aboutUs' >About us</a>
        </div>
        <div className='w-[30%] justify-end  h-full hidden lg:flex gap-x-4  items-center pr-6 '>
      
         <button 
        onClick={() => router.push("/auth")}
        className='px-6 py-2  rounded-full  text-white text-lg  '>
          login
        </button>
        <button 
        onClick={() => router.push("/auth/register")}
        className='px-6 py-2 bg-white rounded-full flex items-center gap-x-2 groupe text-gray-700 text-lg shadow '>
          get started 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:ml-4 transition delay-100">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
        </button>
        </div>
    </header>
  )
}

export default Header