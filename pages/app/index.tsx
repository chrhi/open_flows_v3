import React from 'react'
import Header from '@/components/shared/Header'
import PageLayout from '@/components/shared/PageLayout'
import Reminder from '@/components/dashbored/Reminder'
import PrayerTimes from '@/components/dashbored/PrayerTimes'
import ComingTasks from "@/components/dashbored/ComingTasks"

function index() {
  return (
    <>
    <Header />
    <PageLayout>
    <div className='w-full h-[100px] flex md:justify-start justify-center p-6   items-center'>
    
    <h1 className='text-3xl font-bold ' >Hi 👋 this is the dashboard and your personal space</h1>
    </div>
    <div className='w-[100%] px-[5%] gap-x-4 gap-y-8 h-full flex flex-col '>
   <div className='w-full h-fit flex gap-x-8 '>
   <Reminder />
    <PrayerTimes />
   </div>
    <ComingTasks  />
    </div>
    </PageLayout>
    </>
  )
}

export default index