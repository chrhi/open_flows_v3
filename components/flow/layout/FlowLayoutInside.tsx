import{ ReactNode } from 'react'


type Props = {
  children:ReactNode ,
  padding?:boolean,
}
//
function FlowLayoutInside({children , padding}:Props) {
  return (
   
    <div   className={`ml-[6%] ${padding ? "p-4": "p-0"} bg-gray-50  h-fit  min-h-screen flex gap-x-1 w-[94%]`} >
       
      {children}
     
    </div>
   
  )
}

export default FlowLayoutInside