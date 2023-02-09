import React, { ReactNode } from 'react'


type Props = {
  children:ReactNode 
}
//
function FlowLayoutInside({children}:Props) {
  return (
   
    <div   className='ml-[6%] p-4 bg-gray-100 overflow-hidden h-screen flex gap-x-1 w-[94%]' >
       
      {children}
     
    </div>
   
  )
}

export default FlowLayoutInside