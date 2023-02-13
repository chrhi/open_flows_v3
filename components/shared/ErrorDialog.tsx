import {app_statusReducer} from "@/store"


export default function ErrorDialog() {


  
  

  const {error} = app_statusReducer()
 


  return (
    <div className={`${error.is ? "absolute" : "hidden"} z-[4000] top-0 left-0 bottom-0 right-0 bg-white opacity-50 flex justify-center items-center `}>
      <div className='w-[200px] h-[200px]'>

      </div>
    </div>
  )
}
