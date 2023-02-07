import PageLayout from '@/components/shared/PageLayout'
import React from 'react'
import PageHeadFlows from '../components/PageHeadFlows'
import SquareLayout from "../layouts/SquareLayout"
import Project from '../components/Project'

import salah from "@/images/salah.jpg"

function Projects() {
  return (
   <PageLayout>
    <PageHeadFlows />
    <SquareLayout>
    {[1,2,3,4,5].map((item , index ) => <Project key={index} title='test ' type='business' description='this is a really long text i am planning to do when ever i am doing ' progress ="50%" image={salah} />)}
    </SquareLayout>
   </PageLayout>
  )
}

export default Projects