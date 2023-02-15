import Image, { StaticImageData } from "next/image"
import {motion} from "framer-motion"
import { useRouter } from "next/router"
import { Key } from "react"
import {current_selected_flow} from "@/store"
import { ID } from "@/static/types"




type ProjectType = {
  id:Key | null | undefined ,
  title:string ,
  type:string ,
  description:string,
  progress:string ,
  image:string | StaticImageData
}

function Project({title , type , description , progress , image , id}:ProjectType) {

  const router = useRouter()

  const reducer = current_selected_flow(state => state.change_current)

  return (
    <motion.div 
     onClick={() => { 
      reducer(id as ID)
      router.push(`/app/flows/${id}`)}}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.3}}
     className='2xl:w-[340px] 2xl:h-[320px] lg:w-[300px] lg:h-[280px]
     rounded-xl bg-white cursor-pointer shadow-sm
     hover:shadow-2xl    transition duration-500 transform hover:-translate-y-1
     flex flex-col gap-y-1 z-0
      '>
    <div className='w-full h-[100px]  flex items-center p-4 gap-x-2  z-0 '>
    <div className='w-[60px] h-[60px] rounded-full overflow-hidden'>
      <Image
        width={60}
        height={60}
      src={"https://nxjantewymzaubarsati.supabase.co/storage/v1/object/sign/fkows-images/tesla-symbol.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJma293cy1pbWFnZXMvdGVzbGEtc3ltYm9sLmpwZyIsImlhdCI6MTY3NjI4NjgyMywiZXhwIjoxNzA3ODIyODIzfQ.tnP4iyVObz3eeGAjYBDvBFlaUPeHqv8FXcsyuIoFeNQ&t=2023-02-13T10%3A16%3A23.390Z"} alt={"project pic"} />
    </div>
    <div className='w-[60%] h-[100px] flex flex-col  items-start p-4 justify-between  '>
      <h1 className='text-gray-800 text-xl font-bold truncate'>{title}</h1>
      <p className='text-sky-600 text-md font-bold truncate'>{type}</p>
    </div>
    </div>

    <div className='w-full h-[100px]  z-0 '>
    <p className=' text-sm leading-8 text-gray-600 text-start px-3 truncate'> {description} </p>
    </div>
    <div className='w-full h-[83px] flex flex-col items-center justify-between  py-2 '>
   
   {/* this will starts  */}
    <div className="w-[90%] bg-gray-200 rounded-full h-[5px] ">
     
     <div className={`bg-blue-600 h-[5px] rounded-full w-[${progress}%]`}></div>
   </div>
   {/* this end with this  */}
   
   <div className='w-full h-[50px] flex justify-between'>
   


   </div>

    </div>
   
        
    </motion.div>
  )
}

export default Project