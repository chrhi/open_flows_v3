import { Button } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import GroupsIcon from '@mui/icons-material/Groups';
import {useRouter} from "next/router"
import {flowPageReducer , CONSTANTS} from "@/store"

function SideBar() {
   const router = useRouter()
   const reducer = flowPageReducer(state => state?.change_current)
   const state = flowPageReducer(state => state?.current)
   const {flowID} = router.query
  return (
    <div className='w-[6%] grid grid-cols-1 grid-rows-5 fixed heightAbdullah    left-0  bg-white sideBarH shadow-xl '>
       
        <Button 
        onClick={()=>{
         reducer(CONSTANTS.BRIEF)
         router.push(`/app/flows/${flowID}`)}}
        className ={`!flex !flex-col ${state == "brief" ? "!text-blue-600 " : "!text-gray-400"} !font-normal`} >
           <AssignmentIcon className='text-[2.3rem]' />
           Brief
        </Button>
        <Button 
        onClick={() =>{ 
         reducer(CONSTANTS.DOCS)
         router.push(`/app/flows/${flowID}/docs`)}}
        className ={`!flex !flex-col ${state == "docs" ? "!text-blue-600 " : "!text-gray-400"} !font-normal`} >
           <DescriptionIcon className='text-[2.3rem]' />
          docs
        </Button>
        <Button  className ={`!flex !flex-col ${state == "tasks" ? "!text-blue-600 " : "!text-gray-400"} !font-normal`} > 
           <PlaylistAddCheckIcon className='text-[2.3rem]' />
           tasks
        </Button>
        <Button  className ={`!flex !flex-col ${state == "invoices" ? "!text-blue-600 " : "!text-gray-400"} !font-normal`} > 
           <RequestPageIcon className='text-[2.3rem]' />
           invoices
        </Button>
        <Button  className ={`!flex !flex-col ${state == "team" ? "!text-blue-600 " : "!text-gray-400"} !font-normal`} > 
           <GroupsIcon className='text-[2.3rem]' />
           team
        </Button>
    </div>
  )
}

export default SideBar