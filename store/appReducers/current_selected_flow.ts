import { ID } from '@/static/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


export const CONSTANTS ={
    BRIEF:'brief',
    DOCS:'docs'
}

type flowPageReducerType = {
 id: ID  ,
 change_current :(input :ID) => void ,

}




export const current_selected_flow = create<flowPageReducerType ,[["zustand/persist",unknown]]>(
  persist(
    (set) => ({
     id:"",
     change_current:(input :ID) => set({id:input})
   
    }),
    {
      name: 'current-selected-flow-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)