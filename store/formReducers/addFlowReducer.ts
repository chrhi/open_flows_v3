import { ID } from '@/static/types'
import { create } from 'zustand'

export const addFlowReducer = create(
   
      (set , get) => ({
       flow:{
        title:"",
        brief:"",
        emoji:"",
        starts_at:"",
        ends_at:""

       },
       members:[],
        //user information
        
       set_data : (input : string) =>  set({flow: input}) ,
       set_members :(input :[ID]) => set({members:input})

      })
  )