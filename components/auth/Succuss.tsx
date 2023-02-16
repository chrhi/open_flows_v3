import { Button } from "@mui/material"
import { useRouter } from "next/router"

export default function Succuss() {

  const router = useRouter()

  return (
    <div className='w-full h-screen flex flex-col p-4 sm:p-0 items-center justify-center'>
        <h1 className="text-center">you have successfully completed the sign up process</h1>
        <h2 className="text-center" >check your uuu email box to confirm your email </h2>
        <Button 
        onClick={()=>{
          router.push("/auth")
        }}
        className="!inline-flex !text-white !font-bold    !justify-center !rounded-md !border !border-gray-300 !bg-gradient-to-r !from-sky-500 !to-indigo-600 !px-4 !py-2 !text-sm   !shadow-sm !hover:bg-gray-50 !focus:outline-none !focus:ring-2 !focus:ring-indigo-500 focus:ring-offset-2 !focus:ring-offset-gray-100">
           sign up
        </Button>
    </div>
  )
}
