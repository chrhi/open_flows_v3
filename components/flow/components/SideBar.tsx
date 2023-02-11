import { Button } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import GroupsIcon from '@mui/icons-material/Groups';
import Link from 'next/link';

function SideBar() {
  return (
    <div className='w-[6%] grid grid-cols-1 grid-rows-5 fixed heightAbdullah    left-0  bg-white sideBarH shadow-xl '>
       
        <Button className ="!flex !flex-col !text-blue-600 border-l border-blue-600 border-[2px] !font-normal" >
           <AssignmentIcon className='text-[2.3rem]' />
           Brief
        </Button>
        <Button className ="!flex !flex-col !text-gray-400 !font-normal" >
           <DescriptionIcon className='text-[2.3rem]' />
          docs
        </Button>
        <Button className ="!flex  !flex-col !text-gray-400 !font-normal" >
           <PlaylistAddCheckIcon className='text-[2.3rem]' />
           tasks
        </Button>
        <Button className ="!flex  !flex-col !text-gray-400 !font-normal" >
           <RequestPageIcon className='text-[2.3rem]' />
           invoices
        </Button>
        <Button className ="!flex  !flex-col !text-gray-400 !font-normal" >
           <GroupsIcon className='text-[2.3rem]' />
           team
        </Button>
    </div>
  )
}

export default SideBar