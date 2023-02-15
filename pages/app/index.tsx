import React from 'react'
import Header from '@/components/shared/Header'
import PageLayout from '@/components/shared/PageLayout'

function index() {
  return (
    <>
    <Header />
    <PageLayout>
    <div className='w-full h-[100px] flex md:justify-start justify-center p-6   items-center'>
    
    <h1 className='text-3xl font-bold ' >Hi 👋 this is the dashboard and your personal space</h1>
    </div>
   
    </PageLayout>
    </>
  )
}

export default index