import Image, { StaticImageData } from "next/image"
import {motion} from "framer-motion"
import { useRouter } from "next/router"
import { Key } from "react"
import {current_selected_flow} from "@/store"
import { ID } from "@/static/types"
import Row from "@/util/Row"
import Stack from "@/util/Stack"
import { style } from "@/static/tailwind"





type ProjectType = {
  id:Key | null | undefined ,
  title:string ,
  type:string ,
  description:string,
  progress:string ,
  image:string | StaticImageData,
  icon_url:string
}

function Project({title , type , description , progress , image , id , icon_url}:ProjectType) {

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
     className='2xl:w-[420px] 2xl:h-[350px] lg:w-[380px] lg:h-[310px]
     rounded-xl bg-white cursor-pointer shadow-sm
     hover:shadow-2xl    transition duration-500 transform hover:-translate-y-1
     flex flex-col gap-y-1 z-0 p-4
      '>
    <div className='w-full h-[70px]  flex items-center  gap-x-2  z-0 '>
    <div className='w-[40px] h-[40px] rounded-[50%] flex justify-center items-center overflow-hidden'>
      <Image
        width={60}
        height={60}
        
      src={icon_url} alt={"project pic"} />
    </div>
    <div className='w-[60%] h-[50px] flex  p-4 justify-start items-center  '>
      <h1 className='text-gray-900 text-2xl  truncate'>{title}</h1>
      
    </div>
    </div>

    <div className='w-full h-[120px] overflow-hidden p-4 z-0 '>
    <p className=' text-md   text-gray-600 text-start   abdullahTestWrap  '> {description} </p>
    </div>
    <div className='w-full h-[83px] flex flex-col items-center justify-between  py-2 '>
   
   {/* this will starts  */}
    <div className="w-full bg-gray-200 rounded-full h-[5px] ">
     
     <div className={`bg-blue-600 h-[5px] rounded-full w-[${progress}%]`}></div>
   </div>
   {/* this end with this  */}
   
   <div className='w-full h-[70px] flex items-center justify-between'>
      <Stack className="w-[50%] p-4">
            <Row>
             <p className={`${style.subTitle}`}>status</p> 
            </Row>
            <Row>
              <p className={`text-gray-800 text-md `} >on going</p>
            </Row>
      </Stack>
      <Row className="w-[50%] flex justify-end p-4 items-center gap-x-2">
        <div className="rounded-[50%] bg-green-400 w-4 h-4 " />
      <p className="text-lg  text-green-400" >business</p>
      </Row>
   </div>

       
 

   </div>
   
        
    </motion.div>
  )
}

export default Project