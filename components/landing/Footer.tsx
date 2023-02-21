import React from 'react'
import Image from 'next/image'
import logowhite from "@/images/logowhite.png"

function Footer() {
  return (
   
<footer className=" h-[400px] flex flex-col bg-indigo-900">

<div className='w-full h-[330px] grid grid-cols-4 p-6 place-items-center '>
<ul>
  <li className='text-3xl font-bold text-white'>Contact</li>
  <li className='text-lg  text-white  mt-4' >abdullah chehri</li>
  <li className='text-lg text-white  mt-4' >saidi achref </li>
  <li className='text-lg text-white  mt-4' >salah blil</li>
</ul>
<ul>
  <li className='text-3xl font-bold text-white'>Contact</li>
  <li className='text-lg text-white mt-4' >abdullah chehri</li>
  <li className='text-lg text-white  mt-4' >saidi achref </li>
  <li className='text-lg text-white  mt-4' >salah blil</li>
</ul>
<ul>
  <li className='text-3xl font-bold text-white'>Contact</li>
  <li className='text-lg text-white  mt-4' >abdullah chehri</li>
  <li className='text-lg text-white  mt-4' >saidi achref </li>
  <li className='text-lg text-white  mt-4' >salah blil</li>
</ul>
</div>

<div className='w-full flex h-[70px] bg-indigo-800 justify-center p-4 '>

  <p className='text-white text-lg'>© 2023 abdellah chehri. All rights reserved.</p>
</div>
</footer>

  )
}

export default Footer