import React from 'react'
import Image from "next/image"
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/router'
import { logout } from '@/services/auth/provider'
import { app_statusReducer } from '@/store'





export default function DropDowsMenu() {
 
   //@ts-ignore
    const current_user_photo_url = app_statusReducer(state => state?.current_user_photo_url)
    //@ts-ignore
   const current_user_email = app_statusReducer(state => state?.current_user_email)

  

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
                <Image src={""}
                  alt="Picture of the current user"
                  width={60}
                  height={50}
                className='rounded-full ' />
                </div>
                <div className='w-[30%] flex flex-col justify-center '>
                
               <h1 className='text-lg   '> { "nick name"}</h1>
             
               <p>{current_user_email? current_user_email : null }</p>
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