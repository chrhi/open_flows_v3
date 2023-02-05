import React from 'react'
import Button from "./Button";
//   <Button />
function Hero() {
  return (
   
    <div className='w-full heaghtHero bg-gradient-to-r from-sky-500 to-indigo-600'>
    <div className='w-[60%] h-full flex flex-col p-32 '>
    <h1 className='text-5xl text-white font-bold mb-8 '>
    A Better Place To Run Your Business
    </h1>
    <p className='text-xl text-white '>
    Get Paid, Communicate with Clients, and ManageProjects & Tasks - All on the same platform.
    <br />
    <br />
    Attract more clients, serve them better and keep them longer.
    </p>

    <Button />
 
    </div>

    <div className='w-[40%] h-full'>




    </div>
    </div>
  )
}

export default Hero