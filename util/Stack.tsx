import React, { ReactNode } from 'react'

type StackProps ={
    children:ReactNode,
    className?:string,
}

function Stack({children , className}:StackProps) {
  return (
    <div className={`flex flex-col  ${className} `}>
        {children}
    </div>
  )
}

export default Stack