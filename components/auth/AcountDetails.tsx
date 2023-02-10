import { LoadingButton } from '@mui/lab'
import Button from '@mui/material/Button'
import React , {useState} from 'react'

export default function AcountDetails() {

    const stype = {
        input :" w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
      }
      const [isLoading , setIsLoading] = useState<boolean>(false)

    //graphing the data
    const [first_name , set_fist_name] = useState<string>()
    const[last_name , set_last_name] = useState<string>()
    const [work_space , set_work_space] = useState<string>()
    const [photo_url , set_photo_url] = useState<string>()
  
    const handleSubmit = () => {
     console.log(first_name , last_name , work_space , photo_url)
     setIsLoading(prev => prev = !prev)
      
    }
  
  
  
    return (
      <div className='w-[30%] md:w-[50%] grid grid-cols-2  h-fit shadow-xl rounded-lg bg-white '>
        <div className='col-span-2 h-[70px] p-4 flex justify-center'>
            <h1 className='text-xl font-bold '>tell us more about your self </h1>
        </div>
        <div className='flex flex-col px-4 gap-x-2'>
        <h1>your first name</h1>
        <input  className={stype.input} placeholder='your name' onChange={(event) => set_fist_name(prev => prev = event.target.value)}  />
        </div>
        <div className='flex flex-col px-4 gap-x-2'>
        <h1>your last name</h1>
        <input  className={stype.input} placeholder='your last name' onChange={(event) => set_last_name(prev => prev = event.target.value)}   />
        </div>
        <div className='flex flex-col col-span-2 px-4 my-3 '>
        <h1>create a workspace </h1>
        <input  className={stype.input} placeholder='work space'  onChange={(event) => set_work_space(prev => prev = event.target.value)} />
        </div>
        <div className='flex flex-col col-span-2 px-4 my-3 '>
        <h1>enter a url for your photo </h1>
        <input  className={stype.input} placeholder='url' onChange={(event) => set_photo_url(prev => prev = event.target.value)}  />
        </div>
        <div className='flex  col-span-2 p-4 my-3 '>
    
        <LoadingButton
      className="rounded   !text-white !text-lg bg-gradient-to-r from-sky-500 to-indigo-600"
     loading = {isLoading ? true : false}
     loadingPosition="start"
     onClick={handleSubmit}
     variant="contained"
 
     >
     {isLoading ? "proceeding" :  "save & continue" }
      </LoadingButton>      
        </div>

  
       
      
      
    
  
      {/* and this is the normal form */}
      
      </div>
  )
}



