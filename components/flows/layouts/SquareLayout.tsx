import React, { ReactNode } from 'react'

type Props = {
  children:ReactNode 
}
//
function SquareLayout({children}:Props) {
  return (
    <div className='w-full h-fit grid 2xl:grid-col-5 z-0  lg:grid-cols-4 md:grid-cols-3  grid-cols-1  sm:grid-cols-2  gap-8 px-8 mt-6 mx-auto ' >
      {children}
    </div>
  )
}

export default SquareLayout