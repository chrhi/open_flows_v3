import React from 'react'
import LayoutButton from '../buttons/LayoutButton';
import FilterButton from "../buttons/FilterButton"
import SortButton from '../buttons/SortButton';
import { Button } from '@mui/material';


function PageHead() {
  return (
    <div className='w-full h-[70px] z-0 flex justify-between pl-12  items-center  px-4'>
        <h1 className='text-3xl   '>Flows </h1>
        <div className='h-full w-[60%] z-0 flex gap-x-4 justify-end pl-4 items-center '>
        <LayoutButton />
        <FilterButton />
        <SortButton />
        <Button variant="contained" className ="bg-gradient-to-r from-sky-500 to-indigo-600 !px-3 !py-2  !font-bold !rounded-lg" disableElevation>
       create new project
       </Button>
        </div>
    </div>
  )
}

export default PageHead