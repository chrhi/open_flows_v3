import Link from 'next/link'
import React from 'react'
import {  Button } from '@mui/material'
import DropDowsAvatar from "./DropDowsAvatar"
import { useCurrentPage } from '@/global/useCurrentPage'
import { useRouter } from 'next/router'






function Header() {

  const currentPage = useCurrentPage(state => state?.currentPage)
  const moveToDashbored = useCurrentPage(state => state?.moveToDashBored)
  const moveToFlows = useCurrentPage(state => state?.moveToFlows)

  const router = useRouter()

  const handleDashBored = () => {
    router.push("/app")
    moveToDashbored()
  }
  const handleFlows = () => {
    router.push("/app/flows")
    moveToFlows()
  }

  return (
    <div className='w-full h-[55px] sticky top-0 flex justify-between p-2 px-4 items-center bg-white shadow-sm'>
      <div className='w-1/2 h-full flex justify-start items-center '>
      <h1 className='text-blue-600 text-2xl font-bold cursor-pointer hover:text-blue-700 '>OpenFlows</h1>  
      <div className='w-fit flex gap-x-6 items-center ml-6 '>
      
      <Button variant="text" onClick={handleDashBored} className={`  ${currentPage === "dashboard" ? "text-black": "text-gray-600" } hover:text-gray-900 ${currentPage === "dashboard"? "font-bold": null }`}>
       Dashboard 
      </Button>
      <Button variant="text" onClick={handleFlows}  className={`  ${currentPage === "flows" ? "text-black": "text-gray-600" } hover:text-gray-900 ${currentPage === "flows"? "font-bold": null }`}>
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