import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Salah from "@/images/salah.jpg"
import { Button } from '@mui/material'
import ProfileLoader from "./ProfileLoader"
import {style} from "@/static/tailwind"
import { userReducer , app_statusReducer} from '@/store'
import { get_image } from '@/services/storage/avatar'
import { ID } from '@/static/types'
import { toast } from 'react-toastify'




export default function Profile() {

  const isLoading:boolean = false 
  //getting information from the global context 
  const {is_loading , report_error} = app_statusReducer()
  const {user} = userReducer()

  if(isLoading) return <ProfileLoader />
  return (
    <div className='md:w-[70%] w-full xl:w-[900px] flex flex-col  h-fit bg-white rounded-lg shadow-lg'>
    <div className='w-full flex flex-col lg:flex-row min-h-[400px] h-fit '>
        <div className='lg:w-[20%] w-full h-full flex flex-col items-center px-4 gap-y-4 pt-4'>
            <p className='text-gray-400 text-lg  '>photo profile</p>
            <Image src={get_image(user.id as ID , user.photo_url)} alt='profile'   width={60}
                  height={60}  />
           <button
           className="inline-block bg-white rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
           >
            change
           </button>
        </div>
        <div className='lg:w-[80%] w-full h-full flex flex-col items-start  p-4 sm:px-8'>
            <label className='text-gray-400 text-lg my-2 ' >first name</label>
            <input className={style.input}  value={user.name} />
            <label className='text-gray-400 text-lg my-2 ' >last name</label>
            <input className={style.input}  value={user.last_name}  />
            <label className='text-gray-400 text-lg my-2 ' >company name</label>
            <input className={style.input} value={user.workspaces}  />
            <label className='text-gray-400 text-lg my-2 ' >phone</label>
            <input className={style.input}  />
            <label className='text-gray-400 text-lg my-2 ' >city</label>
            <input className={style.input}  />
            <label className='text-gray-400 text-lg my-2 ' >borth day</label>
            <input className={style.input}  />
        </div>
    </div>
    <div className='bg-white h-[70px] w-full items-center flex sm:justify-end justify-center px-4'>
    <Button 
  
    variant="contained"  
    className="rounded  !text-white text-lg  bg-gradient-to-r from-sky-500 to-indigo-600" >
     edit my profile
    </Button>
    </div>
    </div>
  )
}

