import {useEffect , useState} from 'react'
import {  Button } from '@mui/material'
import DropDowsAvatar from "./DropDowsAvatar"
import { useCurrentPage } from '@/global/useCurrentPage'
import { useRouter } from 'next/router'






function Header() {
       //@ts-ignore
  const getCurrentPage = useCurrentPage(state => state?.getCurrentPage)
       //@ts-ignore
  const moveToDashbored = useCurrentPage(state => state?.moveToDashBored)
       //@ts-ignore
  const moveToFlows = useCurrentPage(state => state?.moveToFlows)
  //@ts-ignore
  const currentPage = useCurrentPage(state => state?.currentPage)
  //this is a state 
  const [currentPageSelected , setCurrentPageSelected] = useState<string>()
  

  const router = useRouter()

  const handleDashBored = () => {
    router.push("/app")
    moveToDashbored()
  }
  const handleFlows = () => {
    router.push("/app/flows")
    moveToFlows()
  }
  useEffect(()=>{
    setCurrentPageSelected(currentPage)
   
  },[currentPage])

  return (
    <div className='w-full z-[100] h-[55px] sticky top-0 flex justify-between p-2 px-4 items-center bg-white shadow-sm'>
      <div className='w-1/2 h-full flex justify-start items-center '>
      <h1 className='text-blue-600 text-2xl font-bold cursor-pointer hover:text-blue-700 '>OpenFlows</h1>  
      <div className='w-fit flex gap-x-6 items-center ml-6 '>
      
      <Button variant="text" onClick={handleDashBored} className={`  ${currentPageSelected === "dashboard" ? "text-black": "text-gray-600" } hover:text-gray-900 ${currentPageSelected === "dashboard"? "font-bold": null }`}>
       Dashboard 
      </Button>
      <Button variant="text" onClick={handleFlows}  className={`  ${currentPageSelected === "flows" ? "text-black": "text-gray-600" } hover:text-gray-900 ${currentPageSelected === "flows"? "font-bold": null }`}>
      Flows
      </Button>
      </div>
      </div>
      <div className='w-1/2 h-full flex justify-end items-center '>
    <DropDowsAvatar />
      </div>
    </div>
  )
}

export default Header