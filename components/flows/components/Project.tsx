import Image from "next/image"


type ProjectType = {
  title:string ,
  type:string ,
  description:string,
  progress:string ,
  image:string
}

function Project({title , type , description , progress , image}:ProjectType) {
  return (
    <div className='w-[320px] h-[300px]
     rounded-xl bg-white cursor-pointer
     hover:shadow-2xl  transition delay-75 
     flex flex-col gap-y-1
      '>
    <div className='w-full h-[100px]  flex items-center p-4 gap-x-2  '>
    <div className='w-[85px] h-[85px]'>
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
    <div className="w-[90%] bg-gray-200 rounded-full h-2.5 ">
     
     <div className={`bg-blue-600 h-2.5 rounded-full w-[${progress}%]`}></div>
   </div>
   {/* this end with this  */}
   
   <div className='w-full h-[50px] flex justify-between'>
   


   </div>

    </div>
   
        
    </div>
  )
}

export default Project