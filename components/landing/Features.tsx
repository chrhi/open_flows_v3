import React from 'react'
import makbook from '@/images/makbook.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Features() {
  return (
    <>
 
<div id='features' className="custom-shape-divider-bottom-1675776926 bg-gradient-to-l from-sky-400 to-indigo-600">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
    <motion.div 
   
    whileInView={{ opacity:[0,1] }}
    
    className='w-full h-screen bg-white flex flex-col items-center pt-24 gap-y-4 px-12 '>
    <h1 className='text-4xl font-bold text-center '>Have all your agency operations in one place</h1>
    <p className='text-lg font-gray-700 text-center'>Tired of having to set up clients on multiple platforms for communication, billing, and project management (and the cost that comes with it)?

Ditch Slack, Asana, Simple Invoices - AgenciFlow does all that for you.</p>
<Image  src={makbook} alt="laptop showcase" />
    </motion.div >
    </>
  )
}

export default Features