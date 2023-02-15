import React from 'react'
import Document from "./Document"
import { useRouter } from 'next/router'
import {useRef , useState , useEffect} from "react"
import {app_statusReducer, current_selected_flow} from "@/store"
import {create_document_row} from "@/services/db/documents"
import {save_document} from "@/services/storage/documents"
import { v4 as uuidV4 } from 'uuid'
import { ID } from '@/static/types'
import {get_document_row_info} from "@/services/db/documents"

function DocsFeed() {

  const router = useRouter()
  const {flowID} = router.query

  const [documentList , setDocumentList] = useState<[any] | null | any>(null )

  const fileRef = useRef<HTMLInputElement>(null)

  const set_loader = app_statusReducer(state => state.set_loading)
  const state = current_selected_flow(state => state.id)


  useEffect(()=>{
    const fetch_docs = async () =>{

      if(!state) return
      set_loader(true)
      const data = await get_document_row_info(state as ID).catch((err)=> console.error(err) )
      set_loader(false)
      if(!data) return
      return data

    }
    fetch_docs().then((data) => setDocumentList(data))
  },[state ,  set_loader])




  const handleUploadingFile =  async () =>{
    if(fileRef.current?.files == null) {
      console.log("there is no file ")
       return
    }
    if(!state) {
     return
    }
    
   
    const document_id : ID  = uuidV4() as ID 

    const file_name : string | undefined = fileRef.current?.files[0]?.name
    if(!file_name) return
    set_loader(true)
    await create_document_row(state as ID  , file_name , document_id as ID)
    await save_document(state as ID , document_id ,fileRef.current?.files[0] )
    set_loader(false)
  
    //call save to the packet function
    }


  return (
    <div className={`w-[40%]  h-screen overflow-scroll bg-white`}>
        <div className='w-full h-[50px] flex items-center p-4 justify-between  '>
    <h1 className='text-xl font-bold text-black '>Docs</h1>
    <input
    ref={fileRef}
    onChange={ handleUploadingFile}
    type='file'
     className="inline-flex  font-bold    justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm  text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
    />
     
    
        </div>
        <div className='w-full h-fit min-h-[100px] flex flex-col mt-2 '>
    <Document name='feed back' />
    <Document  name='oh no...' />
    <Document name='bro..'/>
    <Document name='invoice'/>
    
    {  Array.isArray(documentList) && documentList.map(item => <Document  name={item.name } key={item.id} />)}
    
        </div>
    </div>
  )
}

export default DocsFeed