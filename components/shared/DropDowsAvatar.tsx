import React from 'react'
import Image from "next/image"
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/router'
import { logout } from '@/services/auth/provider'
import Salah from "@/images/salah.jpg"


function DropDowsAvatar() {

  const router = useRouter()

  return (
    <div className="fixed text-right z-[100]">
    <Menu as="div" className="relative z-[100]  inline-block text-left">
      <div className='h-[20px] w-[50px] flex justify-center items-center'>
      <Menu.Button >
      <SettingsIcon />
        </Menu.Button>
    
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-[100] right-0 mt-2 w-[280px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1  z-[100] ">
          <Menu.Item >
              {({ active }) => (
              <div className ="w-full h-[80px] flex border-b border-gray-300 cursor-pointer hover:bg-gray-50" onClick={() => router.push("/app/user")}>
                <div className='w-[30%] flex justify-center items-center'>
                <Image src={Salah} className='rounded-full w-[60px] h-[60px]' alt ={""} />
                </div>
                <div className='w-[30%] flex flex-col justify-center '>
                
               <h1 className='text-lg   '> salah </h1>
               
               <p>salahsvc45@gmail.com</p>
                </div>

              </div>
              )}
            </Menu.Item>
          <Menu.Item>
              {({ active }) => (
                <button
                onClick={() => router.push("/app/user")}
                  className={`${
                    active ? 'bg-blue-500 text-white' : 'text-gray-900'
                  } mt-2 group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  
                  My Profile
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                onClick={() => router.push("/app/user/settings")}
                  className={`${
                    active ? 'bg-blue-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  
                  settings
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={ logout}
                  className={`${
                    active ? 'bg-blue-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  
                 log out
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
         
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
  )
}

export default DropDowsAvatar