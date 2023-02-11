import React from 'react'
import Header from '@/components/shared/Header'
import PageLayout from '@/components/shared/PageLayout'
import Profile from "@/components/profile/Profile"
function index() {
  return (
    <>
    <Header />
    <PageLayout>
    <div className='w-full h-[70px] flex justify-center md:justify-start p-6 pl-8  items-center'>
    <h1 className='text-2xl font-bold '>your account info</h1>
    </div>
    <div className='w-full mih-h-fit flex justify-center '>
    <Profile />
    </div>
    </PageLayout>
    </>
  )
}

export default index

