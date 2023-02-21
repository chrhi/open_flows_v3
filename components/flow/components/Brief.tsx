import { Button } from '@mui/material'
import {useEffect , useState} from 'react'
import { get_flow } from '@/services/db/flow'
import {current_selected_flow , app_statusReducer} from "@/store"
import { useRouter } from 'next/router';
import { ID } from '@/static/types';
import Image from 'next/image';


export default function Brief() {
    const route = useRouter()
    //handle getting parameter from url 
    const [data , setData] = useState();

    const current_flow_id : ID = current_selected_flow(state => state.id)
    const set_loader = app_statusReducer(state => state.set_loading)

    useEffect(()=>{
       
        
        const fetchData = async () => {
            
            if(!current_flow_id) return
            set_loader(true)
            const flow = await get_flow(current_flow_id).catch((err) => {
                set_loader(false)
                return
            })
            set_loader(false)
            if(!flow) return
          
            return flow
        }
        fetchData().then(payload =>{
         
            if(payload) {
                //@ts-ignore
                setData(payload)
            }
        }).catch(err => console.error(err))
       
       
    },[current_flow_id , set_loader ])

    console.log(data)
 
  return (
  
    <div className='w-[50%]'>
        

 
    <div className='w-full mb-2 h-[50px] flex justify-between items-center'>
    {/* @ts-ignore */}
    <h1 className='text-2xl  '>{Array.isArray(data) &&  data[0]?.title } </h1>

    <div>
    <Button 
     
     className="!inline-flex !text-white !font-bold    !justify-center !rounded-md !border !border-gray-300 !bg-gradient-to-r !from-sky-500 !to-indigo-600 !px-4 !py-2 !text-sm   !shadow-sm !hover:bg-gray-50 !focus:outline-none !focus:ring-2 !focus:ring-indigo-500 focus:ring-offset-2 !focus:ring-offset-gray-100">
       edit project
  </Button>
    </div>

    </div>
    <div className ="w-full paper   p-4 flex flex-col gap-y-4  bg-white rounded-lg shadow-sm">
        <h1 className='text-2xl font-bold'>Brief</h1>
        <div className ="w-full h-[30px] flex flex-col justify-start my-4 ">
        <h2 className='text-gary-400 text-md '>title</h2>
        {/* @ts-ignore */}
        <p className='text-black text-xl'> {Array.isArray(data) &&  data[0]?.title }</p>
        </div>
        <div className ="w-full h-[30px] flex flex-col justify-start my-4 ">
        <h2  className='text-gary-400 text-md '>icon</h2>
         {/* @ts-ignore */}
       <Image src={''} alt={'icon image'} className='w-[100px] h-[100px]'  />
        </div>
        <div className ="w-full h-[110px] flex flex-col justify-start my-4 ">
            <h2  className='text-gary-400 text-md '>Brief</h2>
             {/* @ts-ignore */}
            <p className='text-black text-xl'>{Array.isArray(data) &&  data[0]?.brief}</p>
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
    className="rounded !w-[60%] mb-8 !text-lg bg-gradient-to-r from-sky-500 to-indigo-600" >
      mark flow as complete
    </Button>
    </div>
    </div>
    </div>
  
    
  )
}

function display (something:string) {
    return <h1>{something}</h1>
}
