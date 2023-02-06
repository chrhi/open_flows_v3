import { create } from "zustand";
import {  persist , createJSONStorage } from 'zustand/middleware'
interface Page {
    currentPage: string
    moveToFlows: () => void
    moveToDashBored:() => void
  }
//devtools
export const useCurrentPage = create<Page>()(

 persist( (set) => ({
    currentPage:"dashboard",
    moveToFlows: () => set({currentPage:"flows"}),
    moveToDashBored: () => set({currentPage:"dashboard"}),
})
, {
  name: 'food-storage', // name of the item in the storage (must be unique)
  storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
}
)
)

  
