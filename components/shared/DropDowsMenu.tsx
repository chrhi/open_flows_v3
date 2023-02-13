import Image from "next/image"
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/router'
import { logout } from '@/services/auth/provider'
import {userReducer} from "@/store"
import { User } from '@/static/types';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import TuneIcon from '@mui/icons-material/Tune';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


export default function DropDowsMenu() {
  //initializes hooks
   const router = useRouter()
   const user:User = userReducer(state => state.user)
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
        <Menu.Items className="absolute z-[100]  right-0 mt-2 w-[280px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1  z-[100] ">
          <Menu.Item >
              {({ active }) => (
              <div className ="w-full h-[80px] flex border-b border-gray-300 cursor-pointer hover:bg-gray-50" onClick={() => router.push("/app/user")}>
                <div className='w-[30%] flex justify-center items-center'>
                <Image src={"https://nxjantewymzaubarsati.supabase.co/storage/v1/object/public/avatars/achraf.PNG"}
                  alt="Picture of the current user"
                  width={45}
                  height={45}
                className='rounded-full w-[45px] h-[45px] ' />
                </div>
                <div className='w-[70%] flex flex-col justify-center '>
                
               <h1 className='text-lg   '>{user? user.name : null } {user? user.last_name : null }</h1>
             
               <p>{user? user.email : null }</p>
                </div>

              </div>
              )}
            </Menu.Item>
            <Menu.Item >
              {({ active }) => (
              <div className ="w-full min-h-[80px] h-fit flex flex-col  pb-2  border-b border-gray-300 " onClick={() => router.push("/app/user")}>
              <div className="w-full h-[40px] pl-4 p-2">
              <h3 className="text-md text-gray-700 ">workspaces</h3> 
              </div>
              <div className="w-full flex flex-col ">
                <button className="w-full px-4 py-2 flex justify-start bg-sky-500 text-white">
                  workspace
                </button>
             
              </div>
              <div className="w-full h-[40px]   ">
                <button className="w-full px-4 gap-x-2 py-2 flex justify-start cursor-pointer hover:bg-gray-50 bg-white text-gray-700 text-md"> <AddIcon className ="text-gray-700" />  Add new workspace</button>
              </div>
              </div>
              )}
            </Menu.Item>
          <Menu.Item>
              {({ active }) => (
                <button
                onClick={() => router.push("/app/user")}
                  className={`${
                    active ? ' bg-gray-50 text-gray-900' : 'text-gray-900'
                  } mt-2 group  gap-x-4 flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <AccountBoxIcon  className ="text-gray-700" />
                  My Profile
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                onClick={() => router.push("/app/user")}
                  className={`${
                    active ? ' bg-gray-50 text-gray-900' : 'text-gray-900'
                  } mt-2 group  gap-x-4 flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <PeopleAltIcon  className ="text-gray-700" />
                  My Team
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                onClick={() => router.push("/app/user/settings")}
                  className={`${
                    active ? ' bg-gray-50 text-gray-900' : 'text-gray-900'
                  } group flex w-full gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                  <TuneIcon  className ="text-gray-700" />
                  settings
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={ logout}
                  className={`${
                    active ? 'bg-gray-50 text-gray-900' : 'text-gray-900'
                  } group flex w-full  gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                  <LogoutIcon  className ="text-gray-700"  />
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