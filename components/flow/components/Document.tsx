import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import {selected_pdfReducer} from "@/store"
import { ID } from '@/static/types';

type Props = {
    name : string ,
    id:ID,

}

function Document({name , id} :Props) {

  const reducer = selected_pdfReducer(state => state.change_pdf)

  return (
    <div 
    onClick={()=> reducer(id )}
    className='w-full px-8  h-[60px] flex justify-between cursor-pointer items-center p-4 border-b border-gray-200  hover:bg-gray-50  '>
        <DescriptionIcon className ="text-red-600 text-[2rem]" />
        <h1 className='text-md truncate text-gray-600'> {name}</h1>
    </div>
  )
}

export default Document