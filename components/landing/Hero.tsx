import React from 'react'
import Button from "./Button";
//   <Button />
function Hero() {

  //bg-gradient-to-r from-sky-500 to-indigo-600
  return (
   
    <div className='w-full mx-auto xl:w-[1224px]  heaghtHero flex lg:flex-row flex-col   items-center px-6 justify-center  
    
    '>
    <div className='w-full  lg:w-[50%] h-fit flex flex-col md:items-center lg:items-start   p-8 pt-32    lg:px-8 '>
    <h1 className='text-2xl md:text-3xl lg:text-5xl text-white font-bold mb-8 '>
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

    <div className='w-full lg:w-[50%] flex justify-center pt-8 items-center h-fit  '>
    {makeShapeRoundedFull()}
    </div>
    </div>
  )
}

export default Hero

function makeShapeRoundedFull (){
 return(
  <div   className='lg:w-[550px] lg:h-[550px] w-[350px] h-[350px]  relative rounded-[50%] bg-gradient-to-b from-white to-indigo-600 shadow-lg  opacity-75' />
 )
}