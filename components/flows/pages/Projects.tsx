import PageLayout from '@/components/shared/PageLayout'
import React from 'react'
import PageHeadFlows from '../components/PageHeadFlows'
import SquareLayout from "../layouts/SquareLayout"
import {useEffect , useState} from "react"
import Project from '../components/Project'
import { userReducer } from '@/store'
import {get_flows} from "@/services/db/flow"
import {app_statusReducer} from "@/store"
import { MinProject } from '../components/MinProject'
import salah from "@/images/salah.jpg"


export default function Projects() {

  const {set_loading } = app_statusReducer()

  const user = userReducer(state => state.user)

  const [flows , setFlows] = useState<any[]>([])

  const [error , setError] = useState<boolean>(false)

  useEffect(()=>{
    const fetch_flows = async () => {
      if (!user.workspaces) throw new Error ("there is no work space")
      const data = await get_flows(user.workspaces[0].id).catch(err =>{
       console.log(err)
      })
      if(data){
        setFlows(data)
      }else{
       
      }
      
    }
    set_loading(true)
    fetch_flows().then(()=>{
      set_loading(false)

    }).catch((err) =>{
      console.error(err)
      console.log("there is no connection to load")
      
    })
  },[user.workspaces , set_loading ])
// this component will render the all the projects
if(error){
  return <h1>there is error look at console for more information</h1>
}
if(!flows) {
  return(
    <PageLayout>
     <PageHeadFlows />
     <SquareLayout>
    <h1>loading</h1>
     </SquareLayout>
    </PageLayout>
   )
}
   
  return (
   <PageLayout>
    <PageHeadFlows />
    <SquareLayout>
    
    {/* this is the end of the project test */}

    {flows && flows?.map((item: any , index: React.Key | null | undefined ) => <Project key={index} title={item.title} type='business' id={item.id}  description={item.brief} image={""} icon_url={item.icon_url} progress ="50%"  />)}
    </SquareLayout>
   </PageLayout>
  )
}

