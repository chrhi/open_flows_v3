import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


export const CONSTANTS ={
    BRIEF:'brief',
    DOCS:'docs'
}

type flowPageReducerType = {
 current: string ,
 change_current :(input :string) => void ,

}




export const flowPageReducer = create<flowPageReducerType ,[["zustand/persist",unknown]]>(
  persist(
    (set) => ({
     current:CONSTANTS.BRIEF,
     change_current:(input :string) => set({current:input})
   
    }),
    {
      name: 'current-user-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
