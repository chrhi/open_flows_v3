import { Button } from '@mui/material'
import { style } from "@/static/tailwind"

export default function Settings() {
  return (
   <div className='flex flex-col w-full h-fit'>
     <div className='w-full h-[50px] flex items-center justify-start p-8 '>
            <h1 className='text-3xl '>Settings</h1>
     </div>
    <div className='w-[95%] my-4 mx-auto min-h-[200px] h-fit bg-white rounded-lg flex flex-col'>
    <div className="w-full h-[100px] flex items-center p-4 gap-x-8">
        <div className={`${style.stack} w-[30%]`}>
            <p>invoice title</p>
            <input  className={`${style.input} `} placeholder="invoice" />
        </div>
        <div className={`${style.stack} w-[30%] `}>
            <p>new invoice number</p>
            <input  className={`${style.input}`} placeholder="0049" />
        </div>
        <div className={`${style.stack} w-[30%] `}>
            <p>currency</p>
            <input  className={`${style.input}`} placeholder="currency" />
        </div>   
    </div>
    <div className="w-full h-[100px] flex items-center p-4 gap-x-8">
        <div className={`${style.stack} w-[30%]`}>
            <p>street</p>
            <input  className={`${style.input} `} placeholder="invoice" />
        </div>
        <div className={`${style.stack} w-[30%] `}>
            <p>zip code</p>
            <input  className={`${style.input}`} placeholder="0049" />
        </div>
        
    </div>

    <div className="w-full h-[100px] flex items-center p-4 gap-x-8">
      
    
    <Button 
           className="!inline-flex !text-white !font-bold  p-4   !justify-center !rounded-md !border !border-gray-300 !bg-gradient-to-r !from-sky-500 !to-indigo-600 !px-4 !py-2 !text-sm   !shadow-sm !hover:bg-gray-50 !focus:outline-none !focus:ring-2 !focus:ring-indigo-500 focus:ring-offset-2 !focus:ring-offset-gray-100">
           update
     </Button>
     
        
    </div>


    </div>
    </div>
  )
}

