import { DateRangePicker } from 'react-date-range';
import React, { useState } from 'react'
import MultipleSelectCheckmarks from "../components/MultipleSelectCheckmarks"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {addFlowReducer} from "@/store"



const style = {
    input :" w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
  }

function NewProject() {

  const [startDate , setStartDate] = useState(new Date())
  const [endDate , setEndDate] = useState(new Date())
  const [title , set_title] = useState<string>()
  const [emoji , set_emoji] = useState<string>()
 
  const [brief , set_brief] = useState<string>()


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

  const handle_submit = () => {
    set_data({
      title,
      brief,
      emoji,
      starts_at:startDate,
      ends_at:endDate
    })
  }






  return (
    <div className='md:w-[70%]  w-full xl:w-[900px] min-h-[500px] flex flex-col  h-fit bg-white rounded-lg shadow-lg'>
      <div className='w-full h-[50px] flex-col flex my-4 justify-center items-start p-4 '>
        <h1 className='text-gray-400 text-md'>Basic information</h1>
        <p className='text-gray-700 text-lg'>About your new flow </p>
      </div>
      <div className='w-full h-[50px] flex gap-x-2 p-4 my-2 justify-between items-center'>
    <input placeholder='title' className={style.input}  onChange={(event) => set_title(prev => prev = event.target.value)} />
    <input placeholder='image url' className={style.input}  onChange={(event) => set_emoji(prev => prev = event.target.value)} />
      </div>
      <div className='w-full h-fit flex gap-x-2 p-4 my-2 flex-col'>
        <div>
        <h1 className='text-gray-400 text-md'>brief</h1>
        <p className='text-gray-700 text-lg'>Add a strong description </p>
        </div>
    <textarea   placeholder='this is your description about the project'  onChange={(event) => set_brief(prev => prev = event.target.value)} className={`${style.input } mt-1 h-[120px]`}/> 
  
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
    <div className='w-full h-[100px] gap-x-4 bg-gray-50 flex items-center justify-end px-6'>
    <button 
    onClick={() => {
      console.log(members)
      console.log(data)}}
    className="inline-flex   font-bold   justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm  text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
           cancel
        </button>
        <button 
        onClick={handle_submit}
        className="inline-flex  font-bold    justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm  text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
           create
        </button>
        
    </div>
    </div>
   
  )
}

export default NewProject