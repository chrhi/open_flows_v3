import React, { ReactNode } from 'react'

type StackProps ={
    children:ReactNode,
    className?:string,
}

function Row({children , className}:StackProps) {
  return (
    <div className={`flex flex-row  ${className} `}>
        {children}
    </div>
  )
}

export default Row