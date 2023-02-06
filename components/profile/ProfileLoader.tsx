import CircularProgress from '@mui/material/CircularProgress';
import React from 'react'




function ProfileLoader() {

  





  return (
    <div className='md:w-[70%] w-full xl:w-[900px] flex items-center justify-center  h-[500px] bg-white rounded-lg shadow-lg'>
        <CircularProgress disableShrink  />
    </div>
  )
}

export default ProfileLoader