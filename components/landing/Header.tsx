import { Fab } from '@mui/material'
import { useRouter } from 'next/router'

import React from 'react'

function Header() {

  const router =   useRouter()

  

  return (
    <header className='w-full h-[70px] flex items-center sm:justify-between   bg-gradient-to-r from-sky-500 to-indigo-600'>
        <div className='flex w-[30%] items-end h-full justify-center '>
        <h1 className='text-[2rem] text-white  lg:text-4xl font-extrabold '>OpenFlows</h1>
        </div>
        <div className='flex w-[40%] h-full items-end justify-center gap-x-4'>
          <a className ="text-white text-2xl   cursor-pointer" >Features</a>
          <a  className ="text-white text-2xl    cursor-pointer ">why OpenFlows?</a>
          <a  className ="text-white text-2xl   cursor-pointer ">About us</a>
        </div>
        <div className='w-[30%] justify-end  h-full flex gap-x-4  items-end pr-6 '>
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