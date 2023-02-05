import React, { ReactNode } from 'react'


type PageLayout ={
    children:ReactNode ;
}

function PageLayout({children}:PageLayout) {
  return (
    <div className='w-full bodyOfApp bg-gray-100 '>
        {children}
    </div>
  )
}

export default PageLayout