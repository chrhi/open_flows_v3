import { Button } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import GroupsIcon from '@mui/icons-material/Groups';
import {useRouter} from "next/router"
import {flowPageReducer , CONSTANTS , current_selected_flow} from "@/store"

const style ={
   icon:"!text-[2rem] "
}

function SideBar() {
   const router = useRouter()
   const reducer = flowPageReducer(state => state?.change_current)
   const state = flowPageReducer(state => state?.current)

   const flow_id = current_selected_flow(state => state.id)
   
  return (
    <div className='w-[6%] grid grid-cols-1 grid-rows-5 fixed heightAbdullah    left-0  bg-white sideBarH shadow-xl '>
       
        <Button 
        onClick={()=>{
         reducer(CONSTANTS.BRIEF)
         router.push(`/app/flows/${flow_id}`)}}
        className ={`!flex !flex-col ${state == "brief" ? " !text-indigo-500   " : "!text-gray-400"} !normal-case`} >
           <AssignmentIcon className={`${style.icon}`} />
           Brief
        </Button>
        <Button 
        onClick={() =>{ 
         reducer(CONSTANTS.DOCS)
         router.push(`/app/flows/${flow_id}/docs`)}}
        className ={`!flex !flex-col ${state == "docs" ? "!text-blue-600 " : "!text-gray-400"} !normal-case  !font-normal`} >
           <DescriptionIcon className={`${style.icon}`}  />
          docs
        </Button>
        <Button  className ={`!flex !flex-col ${state == "tasks" ? "!text-blue-600 " : "!text-gray-400"} !normal-case  !font-normal`} > 
           <PlaylistAddCheckIcon className={`${style.icon}`} />
           tasks
        </Button>
        <Button  className ={`!flex !flex-col ${state == "invoices" ? "!text-blue-600 " : "!text-gray-400"} !normal-case  !font-normal`} > 
           <RequestPageIcon  className={`${style.icon}`} />
           invoices
        </Button>
        <Button  className ={`!flex !flex-col ${state == "team" ? "!text-blue-600 " : "!text-gray-400"} !normal-case  !font-normal`} > 
           <GroupsIcon className={`${style.icon}`} />
           team
        </Button>
    </div>
  )
}

export default SideBar