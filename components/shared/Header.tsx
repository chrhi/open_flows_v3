import {useEffect , useState} from 'react'
import {  Button } from '@mui/material'
import DropDowsMenu from "./DropDowsMenu"
import { currentPageReducer } from '@/store'
import { useRouter } from 'next/router'
import Image, { StaticImageData } from "next/image"
import Logo from "@/images/icons8-sail-boat-50.png"







function Header() {
       //@ts-ignore
  const moveToInvoices = currentPageReducer(state => state?.moveToInvoices)
       //@ts-ignore
  const moveToDashbored = currentPageReducer(state => state?.moveToDashBored)
       //@ts-ignore
  const moveToFlows = currentPageReducer(state => state?.moveToFlows)
  //@ts-ignore
  const currentPage = currentPageReducer(state => state?.currentPage)
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
  const handleInvoices = () => {
    router.push("/app/invoices")
    moveToInvoices()
  }
  useEffect(()=>{
    setCurrentPageSelected(currentPage)
   
  },[currentPage])

  return (
    <div className='w-full !z-[800] h-[55px] sticky top-0 flex justify-between p-2 px-4 items-center bg-white shadow-sm'>
      <div className='w-1/2 h-full flex justify-start items-center '>
      {/* <h1 className='text-blue-600 text-2xl font-bold cursor-pointer hover:text-blue-700 '>OpenFlows</h1>   */}
      <Image 
      src={Logo}
      alt="logo"
      width={35}
      height={35}
      />
      <div className='w-fit flex gap-x-6 items-center ml-6 !text-gray-600 '>
      
      <Button variant="text" onClick={handleDashBored} className={`  ${currentPageSelected === "dashboard" ? "!text-black": "!text-gray-600" } !hover:text-gray-900 ${currentPageSelected === "dashboard"? "!font-bold": null }`}>
       Dashboard 
      </Button>
      <Button variant="text" onClick={handleFlows}  className={`  ${currentPageSelected === "flows" ? "!text-black": "!text-gray-600" } !hover:text-gray-900 ${currentPageSelected === "flows"? "!font-bold": null }`}>
      Flows
      </Button>
      <Button variant="text" onClick={handleDashBored} className={`  ${currentPageSelected === "chat" ? "!text-black": "!text-gray-600" } !hover:text-gray-900 ${currentPageSelected === "chat"? "!font-bold": null }`}>
      chat
      </Button>
      <Button variant="text" onClick={handleDashBored} className={`  ${currentPageSelected === "tasks" ? "!text-black": "!text-gray-600" } !hover:text-gray-900 ${currentPageSelected === "tasks"? "!font-bold": null }`}>
      tasks
      </Button>
      <Button variant="text" onClick={handleInvoices} className={`  ${currentPageSelected === "invoices" ? "!text-black": "!text-gray-600" } !hover:text-gray-900 ${currentPageSelected === "invoices"? "!font-bold": null }`}>
      invoices
      </Button>
      </div>
      </div>
      <div className='w-1/2 h-full flex justify-end items-center '>
    <DropDowsMenu  />
      </div>
    </div>
  )
}

export default Header