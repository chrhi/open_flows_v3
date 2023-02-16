import { Fab } from '@mui/material'
import { useRouter } from 'next/router'
import logowhite from "@/images/logowhite.png"
import Image from 'next/image'
import React from 'react'

function Header() {

  const router =   useRouter()

  

  return (
    <header className='w-full h-[70px] flex  lg:justify-between items-center pt-10 bg-gradient-to-r from-sky-500 to-indigo-600'>
        <div className='flex w-[30%]  items-center mt-2 gap-x-2 h-full justify-center '>
          <Image  
            src={logowhite}
            alt="logo"
            width={80}
            height={80}
            className='mb-4'
          />
        <h1 className='text-[2rem] text-white   hidden lg:block '>OpenFlows</h1>
        </div>
        <div className='lg:flex w-[40%] h-full items-center justify-center gap-x-4 hidden'>
          <a className ="text-white text-2xl   cursor-pointer" >Features</a>
          <a  className ="text-white text-2xl    cursor-pointer ">why OpenFlows?</a>
          <a  className ="text-white text-2xl   cursor-pointer ">About us</a>
        </div>
        <div className='w-[30%] justify-end  h-full hidden lg:flex gap-x-4  items-center pr-6 '>
        <Fab
        onClick={() => router.push("/auth")}
        variant="extended"  className ="!bg-white !text-blue-600 !font-bold" aria-label="add">
          sign in
       </Fab>
       <Fab
       onClick={() => router.push("/auth/register")}
       variant="extended" className ="!bg-white !text-blue-600  !font-bold" aria-label="add">
        start free trail
        </Fab>
        </div>
    </header>
  )
}

export default Header