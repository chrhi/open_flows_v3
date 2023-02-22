import { style } from "@/static/tailwind"
import {RowInput} from "./RowInput"
import { Button } from "@mui/material"
import {useEffect, useRef , useState} from "react"
import type {Invoice, item} from "@/static/types"
import { useOnError } from "../hooks/useOnError"
import {useCheckInternet} from "@/util/useCheckInternet"

//handle  adding assign invoice to a project 


export default function Creation() {
  const clientName = useRef<HTMLInputElement>(null)
  const clientEmail = useRef<HTMLInputElement>(null)
  const ClientDescription = useRef<HTMLTextAreaElement>(null)
  const invoiceFrom = useRef<HTMLInputElement>(null)
  const invoiceDetails =  useRef<HTMLTextAreaElement>(null)
  const taxInvoice =  useRef<HTMLInputElement>(null)
  const noteInvoice =  useRef<HTMLTextAreaElement>(null)
  const discountInvoice =  useRef<HTMLInputElement>(null)
  const [items , setItems] = useState<item[]>([{
    price:0,
    quantity:0,
    description:""
  }] )

  const error = useOnError()

  const handleSubmit = async () =>{
    if(!navigator.onLine){
      error("there is no internet connection ")
      return

    }

    if(items[0].price == 0 || items[0].quantity == 0){
      error("you have to add at least one item")
    }
    if(invoiceFrom.current?.value! == "" ){
      error("your invoice information are required")
    }

    const invoice :Invoice = {
      invoiceFrom:invoiceFrom.current?.value!,
      invoiceDetails:invoiceDetails.current?.value!,
      discount:Number(discountInvoice.current?.value!),
      note:noteInvoice.current?.value!,
      tax:Number(taxInvoice.current?.value!),
      items:items,
      client:{
        client:clientName.current?.value!,
        email:clientEmail.current?.value!,
        description:ClientDescription.current?.value!,
      }
    }

   
  }

  const handleAddingRow = () =>{
   setItems([...items , {
    price:0,
    quantity:0,
    description:""
   }])
  }

  useEffect(() => {
     if(!navigator.onLine){
      error("there is no internet connection ")
     }
  }, [error])
  

  return (
    <div className='w-full md:w-[90%] mx-auto lg:w-[60%] h-fit paper  xl:w-[800px]  p-4'>
    <div className='w-full  mb-2 h-[50px] flex justify-between  items-center'>
    <h1 className='text-3xl   '>create invoices </h1>

    <Button 
           className="!inline-flex !text-white !font-bold    !justify-center !rounded-md !border !border-gray-300 !bg-gradient-to-r !from-sky-500 !to-indigo-600 !px-4 !py-2 !text-sm   !shadow-sm !hover:bg-gray-50 !focus:outline-none !focus:ring-2 !focus:ring-indigo-500 focus:ring-offset-2 !focus:ring-offset-gray-100">
           close and save
     </Button>

    </div>
    <form className ="w-full bg-white   h-fit   p-4 flex flex-col  rounded-lg shadow-sm">
      <div className="h-fit w-full flex ">
      {/* this is for the client info */}
      <div className=" flex flex-col p-4 w-[50%] h-[250px] gap-y-3">
      <h1 className={style.title} >Client</h1>
      <input type="text" className={style.input} ref={clientName} placeholder="name" />
      <input type="email" className={style.input}  ref={clientEmail}  placeholder="client email"  />
      <textarea ref={ClientDescription} className={`${style.input} h-[100px]`}></textarea>

      </div>
       {/* this is for the company info */}
      <div className="p-4   gap-y-2 flex flex-col  w-[50%]  h-[250px]   ">
      <h1 className={style.title}>invoice</h1>
     
      <input ref={invoiceFrom} type="text" className={style.input}  placeholder="invoice from" />
      <textarea ref={invoiceDetails} className={`${style.input} h-[100px]`} placeholder="invoice details"></textarea>
      </div>
      </div>
      {/* this relate to a project  */}

      <div className="w-full h-[70px] flex flex-col">
    <h1>thi invoice is assigned to </h1>
    
      </div>

      {/* this is for getting amount $ */}
      <div className="w-full min-h-[150px] my-2 h-fit  flex flex-col ">
        <div className="flex gap-2 p-2">
          <h1 className={`w-[54%] ${style.subTitle}`}>Description</h1>
          <p className={`w-[12%] ${style.subTitle}`} >quantity</p>
          <p  className={`w-[12%] ${style.subTitle}`} >price</p>
          <p  className={`w-[12%] ${style.subTitle}`} >total</p>
        </div>
       {items.map((row , index )=>  <RowInput state ={items} setState ={setItems} index={index} key={`${index} beeeeer`} />)}
        
       <div className="w-full h-[40px] flex items-center justify-between   p-6">
       <Button 
       onClick={handleAddingRow}
    className="!inline-flex   !font-bold h-[40px]  !justify-center !rounded-md border !border-gray-300 !bg-white !px-4 py-2 !text-sm  !text-gray-500 !shadow-sm !hover:bg-gray-50 !focus:outline-none !focus:ring-2 !focus:ring-indigo-500 !focus:ring-offset-2 !focus:ring-offset-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
          </svg>

           add an other item
        </Button>
        <h1 className={style.subTitle}>total due : <span className={style.title }>00.0$</span></h1>
       </div>
      </div>
     {/* this will take any note and add it to the invoice */}
     <div className="w-full h-[120px] mb-2  p-4 flex flex-col ">
    <h1 className={`${style.subTitle}`}>note</h1>
    <textarea  ref={noteInvoice} className={`${style.input} h-[120px]`} placeholder="invoice details"></textarea>
      </div>
      {/* this will take any note and add it to the invoice */}
    <div className="w-full my-2 p-4 gap-x-2 flex ">
    <div className="  flex w-[50%] flex-col h-[70px]  ">
    <h1 className={`${style.subTitle}`}>discount</h1>
    <input type="number" ref={discountInvoice} className={style.input}  placeholder="0%" />
    </div>
    <div className=" w-[50%] flex flex-col h-[70px] ">
    <h1 className={`${style.subTitle}`}>TAX AMOUNT</h1>
    <input type="number" ref={taxInvoice} className={style.input}  placeholder="00.00$" />
    </div>
    </div>
    </form>
    </div>
  )
}