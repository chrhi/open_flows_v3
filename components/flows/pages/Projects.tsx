import PageLayout from '@/components/shared/PageLayout'
import React, { useEffect } from 'react'
import PageHeadFlows from '../components/PageHeadFlows'
import SquareLayout from "../layouts/SquareLayout"
import Project from '../components/Project'
import {Flows} from "@/context/Flows"

import salah from "@/images/salah.jpg"


const domyData = [1]

function Projects() {
    //@ts-ignore
    const data = Flows(state => state?.flows)
   //@ts-ignore
    const setFlows = Flows(state => state?.setFlows)
    useEffect(() => {
      setFlows(domyData)
    },[])

   
  return (
   <PageLayout>
    <PageHeadFlows />
    <SquareLayout>
    {data && data?.map((item: any , index: React.Key | null | undefined ) => <Project key={index} title='test ' type='business' id={index}  description='this is a really long text i am planning to do when ever i am doing ' progress ="50%" image={salah} />)}
    </SquareLayout>
   </PageLayout>
  )
}

export default Projects