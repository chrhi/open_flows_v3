import { Button } from '@mui/material'
import {useEffect , useState} from 'react'
import { get_flow } from '@/services/db/flow'

import { useRouter } from 'next/router';

export default function Brief() {
    const route = useRouter()
    //handle getting parameter from url 

    
    const [data , setData] = useState();

    useEffect(()=>{
        const fetchData = async () => {
            //handle passing that parameter to the function 
            //get the data display it 
            //handle loading state 
            
          //  const data = await get_flow()
        }
    },[])

    


  return (
    <div className='w-[50%]'>
    <div className='w-full mb-2 h-[50px] flex justify-between items-center'>
    <h1 className='text-2xl font-bold '>agency flows</h1>

    <div>
        <button  className="inline-flex z-[200] w-full font-bold gap-x-2 justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm  text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            edit
        </button>
    </div>

    </div>
    <div className ="w-full paper overflow-y-scroll  p-4 flex flex-col gap-y-4  bg-white rounded-lg shadow-sm">
        <h1 className='text-2xl font-bold'>Brief</h1>
        <div className ="w-full h-[30px] flex flex-col justify-start my-4 ">
        <h2 className='text-gary-400 text-md '>title</h2>
        <p className='text-black text-xl'> AgenciFlow</p>
        </div>
        <div className ="w-full h-[30px] flex flex-col justify-start my-4 ">
        <h2  className='text-gary-400 text-md '>icon</h2>
        <p className='text-black text-xl'>😍</p>
        </div>
        <div className ="w-full h-[110px] flex flex-col justify-start my-4 ">
            <h2  className='text-gary-400 text-md '>Brief</h2>
            <p className='text-black text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus, magni nulla eius, sit sequi eum fugiat repellat modi recusandae dolore obcaecati temporibus. Eveniet quos beatae, optio amet quisquam eligendi!</p>
        </div>
        <div className ="w-full h-[50px] flex flex-col justify-start my-4 ">
            <h2  className='text-gary-400 text-md '>Status</h2>
            <p className='text-black text-xl'>work in Progress</p>
        </div>
        <div className ="w-full h-[50px] flex flex-col justify-start my-4 ">
            <h2 className='text-gary-400 text-md ' >flow tag</h2>
            <p className='text-black text-xl'> Contact</p>
        </div>
    
    <div className='w-full h-[70px] flex justify-center items-center'>
        <Button 
    
    variant="contained"  
    className="rounded !w-[60%]  !text-lg bg-gradient-to-r from-sky-500 to-indigo-600" >
      mark flow as complete
    </Button>
    </div>




    </div>
    </div>
  )
}
