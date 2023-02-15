
import { style } from "@/static/tailwind"
import { Button } from "@mui/material"


export default function AddWorkSpace() {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center">
     <div className="w-[700px] h-[100px] flex  flex-col pt-6">
     <h1 className="text-start text-2xl font-bold text-gray-700 "> Create a new workspace </h1>
     <p className="text-lg text-gray-600" >lefts get started</p>
     </div>
     <form className="w-[700px] h-[350px] bg-white
    flex flex-col p-4 gay-y-4 
     rounded-lg shadow-lg mt-4 " >
    <div className="my-6 w-full">
    <label >confirm your email</label>
    <input className={style.input}  />
    </div>
    <div className="my-6 w-full" >
    <label >your new workspace name</label>
    <input className={style.input}  />
    </div>
    <div className="my-2 w-full" >
    <Button 
     
      variant="contained"  
      className="rounded w-[90%] md:!w-[270px]  !text-lg bg-gradient-to-r from-sky-500 to-indigo-600" >
        save & continue
      </Button>
    </div>
     </form>
    
    </div>
  )
}

