import PageLayout from '@/components/shared/PageLayout'
import React from 'react'
import PageHeadFlows from '../components/PageHeadFlows'
import SquareLayout from "../layouts/SquareLayout"
import Project from '../components/Project'


function Projects() {
  
// this component will render the all the projects
   
  return (
   <PageLayout>
    <PageHeadFlows />
    <SquareLayout>
    {/* {data && data?.map((item: any , index: React.Key | null | undefined ) => <Project key={index} title='test ' type='business' id={index}  description='this is a really long text i am planning to do when ever i am doing ' progress ="50%" image={salah} />)} */}
    </SquareLayout>
   </PageLayout>
  )
}

export default Projects