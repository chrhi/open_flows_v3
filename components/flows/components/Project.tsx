import Image, { StaticImageData } from "next/image"



type ProjectType = {
  title:string ,
  type:string ,
  description:string,
  progress:string ,
  image:string | StaticImageData
}

function Project({title , type , description , progress , image}:ProjectType) {
  return (
    <div className='2xl:w-[340px] 2xl:h-[320px] lg:w-[300px] lg:h-[280px]
     rounded-xl bg-white cursor-pointer shadow-sm
     hover:shadow-2xl    transition duration-500 transform hover:-translate-y-1
     flex flex-col gap-y-1 z-0
      '>
    <div className='w-full h-[100px]  flex items-center p-4 gap-x-2  '>
    <div className='w-[60px] h-[60px] rounded-full overflow-hidden'>
      <Image src={image} alt={"project pic"} />
    </div>
    <div className='w-[60%] h-[100px] flex flex-col  items-start p-4 justify-between  '>
      <h1 className='text-gray-800 text-xl font-bold '>{title}</h1>
      <p className='text-sky-600 text-md font-bold '>{type}</p>
    </div>
    </div>

    <div className='w-full h-[100px]  '>
    <p className=' text-sm leading-8 text-gray-600 text-start px-3'> {description} </p>
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
   
        
    </div>
  )
}

export default Project