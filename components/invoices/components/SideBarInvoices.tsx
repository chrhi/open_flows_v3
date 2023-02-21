import { Button } from '@mui/material'
import RequestPageIcon from '@mui/icons-material/RequestPage';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';


function SideBarInvoices() {
  return (
    <div className='w-[6%]  grid grid-cols-1 grid-rows-5 fixed heightAbdullah  justify-items-center   left-0  bg-white sideBarH shadow-xl '>
       
    <Button className ="!flex !normal-case !flex-col !text-blue-600 border-l border-blue-600 border-[2px] !font-normal" >
      <RequestPageIcon className="!text-[2rem]"/>
       invoices
    </Button>
    <Button className ="!flex !normal-case !flex-col !text-gray-400 !font-normal" >
       <MenuBookIcon   className="!text-[2rem]" />
      summary
    </Button>
    <Button className ="!flex !normal-case !flex-col !text-gray-400 !font-normal" >
       <DisplaySettingsIcon  className="!text-[2rem]"/>
       settings
    </Button>
    
</div>
  )
}

export default SideBarInvoices