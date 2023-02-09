import React from 'react'
import LayoutButton from '../buttons/LayoutButton';
import FilterButton from "../buttons/FilterButton"
import SortButton from '../buttons/SortButton';
import { Button } from '@mui/material';
import { useFlows } from '@/context/useFlows';
import { NextRouter, useRouter } from 'next/router';


function PageHead() {
  const router:NextRouter = useRouter()
  
  return (
    <div className='w-full h-[80px]  flex justify-between pl-12  items-center  px-4'>
        <h1 className='text-3xl   '>Flows </h1>
        <div className='h-full w-[60%] !z-[10] flex gap-x-4 justify-end pl-4   items-center '>
        <LayoutButton />
        <FilterButton />
        <SortButton />
        <Button  onClick={() => router.push("/app/flows/create")} variant="contained" className ="bg-gradient-to-r from-sky-500 to-indigo-600 !px-3 !py-2  !font-bold !rounded-lg" disableElevation>
       create new project
       </Button>
        </div>
    </div>
  )
}

export default PageHead