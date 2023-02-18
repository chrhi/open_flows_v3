import { style } from "@/static/tailwind"
import { IconButton } from "@mui/material"
import type { item , ID } from "@/static/types"
import { ChangeEvent, Dispatch, SetStateAction , useState } from "react"

type RowInputProps ={
  state:item[],
  setState: Dispatch<SetStateAction<item[]>>,
  index:number
}

export  const  RowInput = ({state , setState , index }:RowInputProps) => {

  const [amount , setAmount] = useState<number>(0)

  const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
    //getting the data from the targeted input 
    const {name , value } = e.target
    const list:item[] = [...state]
    //@ts-ignore
    list[index][name] = value  
    setState([...list])
    
    const total : number = list[index]["price"] * list[index]["quantity"]
    setAmount(total)
  }

  const handleRemove = () =>{
    const list:item[]  = [...state]
    //if we have one item we should not delete it
    if(state.length == 1) return
   const newList = list.filter((item , i) => i !== index)
   
    setState([...newList])
  }

  return (
    <div className=" flex items-center w-full col-span-2 px-2 gap-x-2 h-[50px] ">
    <input type="text" className={`${style.input} !w-[54%]` } name="description" onChange={(e) => handleChange(e)} placeholder="description" />
    <input type="number" className={`${style.input} !w-[12%]`} name="price"  placeholder="00" onChange={(e) => handleChange(e)} />
    <input type="number" className={`${style.input} !w-[12%] `} name="quantity" placeholder="00.00$" onChange={(e) => handleChange(e)} />
    <input type="text" disabled className={`${style.input} !w-[12%] `} value={`${amount} $`} placeholder="00.00$" />
    <IconButton
    onClick={handleRemove}
    aria-label="delete" size="small">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
    </IconButton>
    </div>
  )
}

