import React from 'react'

import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'






function FilterButton() {



  return (
    <div className="fixed text-right z-[100]">
    <Menu as="div" className="relative z-[100]  inline-block text-left">
      <div className='h-[20px] w-[50px] flex justify-center items-center'>
      <Menu.Button >
      
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
          <div className="px-1 py-1 ">
          <Menu.Item >
              {({ active }) => (
              <button>
               only completed projects
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



export default FilterButton