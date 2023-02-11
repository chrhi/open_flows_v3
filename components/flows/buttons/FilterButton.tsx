import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function FilterButton() {
  

  return (
    <Menu as="div" className="relative inline-block !z-[300] text-left">
      <div>
      <Menu.Button 
      
      className="inline-flex  gap-x-2 !z-[300] font-bold  w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm  text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
      <FilterAltIcon />
          filter
         
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
        <Menu.Items className="absolute right-0 z-[200] mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 !z-[300]">
           
          <Menu.Item 
          
          >
              {({ active }) => (
                <button
                
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  only completed 
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}



