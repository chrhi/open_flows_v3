import { create } from "zustand";
import {  persist , createJSONStorage } from 'zustand/middleware'
interface Page {
    isAddingNewProject: boolean
    yes: () => void
    no:() => void
  }
//devtools
export const useFlows = create<Page>()(

 persist( (set) => ({
    isAddingNewProject:false,
    yes: () => set({isAddingNewProject:true}),
    no: () => set({isAddingNewProject:false}),
})
, {
  name: 'adding-new-project-storage', // name of the item in the storage (must be unique)
  storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
}
)
)
