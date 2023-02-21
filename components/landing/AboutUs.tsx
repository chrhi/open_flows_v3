import React from 'react'
import { motion } from 'framer-motion'
export default function AboutUs() {
  return (
    <motion.div 
    whileInView={{opacity:[0,1]}}
    id="aboutUs" className='w-full h-[200px] bg-gradient-to-t flex shadow-2xl shadow-blue-700  justify-center items-center from-sky-600 to-blue-700'>
        <h1 className='text-3xl text-white font-bold'>
        ce project realise par  chehri abdellah acherf saidi salah blill</h1>
    </motion.div>
  )
}

