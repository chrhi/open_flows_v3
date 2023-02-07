import React from 'react'
import LayoutButton from '../buttons/LayoutButton';


function PageHead() {
  return (
    <div className='w-full h-[70px] flex justify-between items-center px-4'>
        <h1 className='text-2xl  '>Flows </h1>
        <div className='h-full w-[40%] flex items-center '>
        <LayoutButton />
        </div>
    </div>
  )
}

export default PageHead