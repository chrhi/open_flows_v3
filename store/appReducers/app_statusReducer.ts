import { ID } from '@/static/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


type Reducer ={
  error:{
    is:boolean ,
    payload:string,
  }
  is_loading: boolean,
  report_error :(input :{is:boolean , payload:string}) => void ,
  set_loading :(input :boolean) => void ,

}

export const app_statusReducer = create<Reducer ,[["zustand/persist",unknown]]>(
  persist(
    (set) => ({
      error:{
        is:false,
        payload:""
      },
      is_loading: true,
     
      report_error:(input :{is:boolean , payload:string}) => set({error : input}),
      set_loading : (input :boolean) => {
        set({is_loading : input})
      }
     
    }),
    {
      name: 'app-status-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

