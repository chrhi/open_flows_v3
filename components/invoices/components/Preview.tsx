import React from 'react'

export default function Preview() {
  return (
    <div className='w-[40%]  h-full flex flex-col justify-start pt-2 items-center'>
        <div className='flex justify-end gap-x-2  w-full'>
        <button  className="inline-flex   font-bold   justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm  text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
           save and close
        </button>
        <button  className="inline-flex  font-bold    justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm  text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            download
        </button>
        <button  className="inline-flex  font-bold    justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm  text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            send by email
        </button>
    </div>
    </div>
  )
}
