import React from 'react'
import makbook from '@/images/makbook.png'
import Image from 'next/image'


function Features() {
  return (
    <>
 
<div id='features' className="custom-shape-divider-bottom-1675776926 w-full  bg-gradient-to-l from-sky-400 to-indigo-600">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
    <div 
   
    
    
    className='w-full pb-8 h-screen bg-white flex flex-col items-center pt-24 gap-y-4 px-12 relative '>
       <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    <h1 className='text-2xl lg:text-4xl font-bold text-center '>Have all your agency operations in one place</h1>
    <p className='lg:text-lg text-md font-gray-700 text-center'>Tired of having to set up clients on multiple platforms for communication, billing, and project management (and the cost that comes with it)?

Ditch Slack, Asana, Simple Invoices - AgenciFlow does all that for you.</p>
<Image  src={makbook} alt="laptop showcase" />
    </div >
    </>
  )
}

export default Features