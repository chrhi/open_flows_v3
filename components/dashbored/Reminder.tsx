import React from 'react'
import { useTypewriter , Cursor } from 'react-simple-typewriter'

function Reminder() {

  const [text] = useTypewriter({
    words:['it is far better to dare great things','to win glorias battles ' , 'even though checked by failed ', 'then to take rank with those poor operates', 'who nether enjoy nor safer much'],
    loop:true,
  });


  return (
    <div className='w-[40%]  h-[200px] bg-white   p-8 rounded-lg' >
      <h1 className='text-2xl text-black font-bold'>
      Reminder :
        </h1>
        <p className='!bg-clip-text !bg-gradient-to-r !from-sky-500 !to-indigo-600 !text-transparent text-lg my-8'>
        {text}
        </p>
    </div>
  
  )
}

export default Reminder