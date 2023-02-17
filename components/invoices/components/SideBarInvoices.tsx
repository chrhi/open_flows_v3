import { Button } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import Link from 'next/link';

function SideBarInvoices() {
  return (
    <div className='w-[6%]  grid grid-cols-1 grid-rows-5 fixed heightAbdullah  justify-items-center   left-0  bg-white sideBarH shadow-xl '>
       
    <Button className ="!flex !normal-case !flex-col !text-blue-600 border-l border-blue-600 border-[2px] !font-normal" >
      <RequestPageIcon />
       invoices
    </Button>
    <Button className ="!flex !normal-case !flex-col !text-gray-400 !font-normal" >
       <MenuBookIcon  />
      summary
    </Button>
    <Button className ="!flex !normal-case !flex-col !text-gray-400 !font-normal" >
       <DisplaySettingsIcon />
       settings
    </Button>
    
</div>
  )
}

export default SideBarInvoices