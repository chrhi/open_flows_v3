import React from 'react'
import Header from '@/components/shared/Header'
import PageLayout from '@/components/shared/PageLayout'
import ControlleFlow from '@/components/flows/pages/ControlleFlow'
import Projects from '@/components/flows/pages/Projects'


function index() {

 

  return (
    <>
    <Header />
   <PageLayout>
   <Projects />
    
   </PageLayout>
    </>
  )
}

export default index