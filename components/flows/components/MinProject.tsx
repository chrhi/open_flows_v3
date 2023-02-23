import React from 'react'
import Row from '@/util/Row'
import Stack from '@/util/Stack'
import Image, { StaticImageData } from 'next/image'


 type MiniProjectType ={
    image :string | StaticImageData ,
}

export  function MinProject({image}:MiniProjectType) {
  return (
  <Stack>
    <Row className='w-[300px] h-[70px] bg-white cursor-pointer shadow-sm rounded-xl
     hover:shadow-2xl justify-between items-center p-4   transition duration-500 transform hover:-translate-y-1'>
       
       <div className='w-[40px] h-[40px] rounded-[50%] flex justify-center items-center overflow-hidden'>
      <Image
        width={60}
        height={60}
        
      src={image} alt={"project pic"} />
    </div>

       <div className='w-[70%]'>
       <h1 className='text-lg text-gray-800 font-bold truncate '>this is a project title</h1>
       </div>
    </Row>
  </Stack>
  )
}

