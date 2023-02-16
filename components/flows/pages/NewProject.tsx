import { DateRangePicker } from 'react-date-range';
import React, { useState } from 'react'
import MultipleSelectCheckmarks from "../components/MultipleSelectCheckmarks"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {addFlowReducer , userReducer} from "@/store"
import {create_flow} from "@/services/db/flow"
import { style} from "@/static/tailwind"
import { ID } from '@/static/types';
import { useRouter } from 'next/router';
import {app_statusReducer} from "@/store"
import { Button} from '@mui/material'
import SelectTailwind from "@/components/reuasable/SelectTailwind"
import {flowAvatars} from "@/static/flowAvatars"


function NewProject() {

  const {user} = userReducer()

  const router = useRouter()

  const set_loader = app_statusReducer(state => state.set_loading)


  const [startDate , setStartDate] = useState<Date>(new Date())
  const [endDate , setEndDate] = useState<Date>(new Date())
  const [title , set_title] = useState<string>()
  const [emoji , set_emoji] = useState<string>()
 
  const [brief , set_brief] = useState<string>()

  const [avatar , setAvatar] = useState< {
    id: number;
    name: string;
    url: string;

}>(flowAvatars[0])


  //@ts-ignore
  const set_data = addFlowReducer(state => state.set_data)

    //@ts-ignore
    const data = addFlowReducer(state => state.flow)
     //@ts-ignore
    const members = addFlowReducer(state => state.members)

  
  const handleSelect = (ranges:any) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const handle_submit = async () => {
   
    set_data({
      title,
      brief,
      emoji,
      starts_at:startDate,
      ends_at:endDate
    })
    if(!user?.workspaces || !title || !brief   ) return
    set_loader(true)
   await  create_flow(
    user.workspaces[0]?.id as ID ,
    title as string ,
    brief as string,
    false ,
    avatar.url as string,
    startDate?.toDateString()  ,
    endDate?.toDateString() ,
    [user.id as ID]
   ).catch(error => {
    console.error(error)
    set_loader(false)
   })

   router.push("/app/flows") 
   set_loader(false)
  }

  




  return (
    <div className='md:w-[70%]  w-full xl:w-[900px] min-h-[500px] flex flex-col  h-fit bg-white rounded-lg shadow-lg'>
      <div className='w-full h-[50px] flex-col flex my-4 justify-center items-start p-4 '>
        <h1 className='text-gray-400 text-md'>Basic information</h1>
        <p className='text-gray-700 text-lg'>About your new flow </p>
      </div>
      <div className='w-full h-[50px] flex gap-x-2 p-4 my-2 justify-between items-center'>
    <input placeholder='title' className={`${style.input}  ` }  onChange={(event) => set_title(prev => prev = event.target.value)} />
    <SelectTailwind state={avatar } setState={setAvatar} data={flowAvatars}  />
      </div>
      <div className='w-full h-fit flex gap-x-2 p-4 my-2 flex-col'>
        <div>
        <h1 className='text-gray-400 text-md'>brief</h1>
        <p className='text-gray-700 text-lg'>Add a strong description </p>
        </div>
    <textarea   placeholder='this is your   description about the project'  onChange={(event) => set_brief(prev => prev = event.target.value)} className={`${style.input } mt-1 h-[120px] font-bold text-lg `}/> 
  
      </div>
      <div className='w-full min-h-[100px] h-fit flex flex-col p-4'>
            <div className='h-full w-[90%] flex flex-col '>
          <div>
        <h1 className='text-gray-400 text-md'>due to</h1>
        <p className='text-gray-700 text-lg'>When this project should be down </p>
        </div>


        <div className=' my-4 w-full flex justify-center '>

        <DateRangePicker  ranges={[selectionRange]} minDate={new Date()} onChange={handleSelect} />
        </div>
            </div>


 <div className='h-full flex flex-col'>
              <div>
            <h1 className='text-gray-400 text-md'>members</h1>
             <p className='text-gray-700 text-lg'>allow your team to have access to this project </p>
              </div>
        <div>
         <MultipleSelectCheckmarks />
        </div>
              </div>
      

    </div>
    <div className='w-full h-[100px] gap-x-4 bg-white flex items-center justify-end px-6'>
    <Button 
    onClick={() => {
      router.push("/app/flows")  
    }}
    className="!inline-flex   !font-bold   !justify-center !rounded-md border !border-gray-300 !bg-white !px-4 py-2 !text-sm  !text-gray-700 !shadow-sm !hover:bg-gray-50 !focus:outline-none !focus:ring-2 !focus:ring-indigo-500 !focus:ring-offset-2 !focus:ring-offset-gray-100">
           cancel
        </Button>
        <Button 
        onClick={handle_submit}
        className="!inline-flex !text-white !font-bold    !justify-center !rounded-md !border !border-gray-300 !bg-gradient-to-r !from-sky-500 !to-indigo-600 !px-4 !py-2 !text-sm   !shadow-sm !hover:bg-gray-50 !focus:outline-none !focus:ring-2 !focus:ring-indigo-500 focus:ring-offset-2 !focus:ring-offset-gray-100">
           create
        </Button>
        
    </div>
    </div>
   
  )
}

export default NewProject