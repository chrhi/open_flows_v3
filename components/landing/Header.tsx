import { Fab } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <header className='w-full h-[70px] flex items-center sm:justify-between p-8   bg-gradient-to-r from-sky-500 to-indigo-600'>
        <div>
        <h1 className='text-3xl text-white  lg:text-4xl font-bold '>Open Flows</h1>
        </div>
        <div>
        <Fab variant="extended"  className ="!bg-white !text-blue-600 " aria-label="add">
  
  sifn in
</Fab>
<Fab variant="extended" className ="!bg-white !text-blue-600 " aria-label="add">
  
  start free trail
</Fab>
        </div>
    </header>
  )
}

export default Header