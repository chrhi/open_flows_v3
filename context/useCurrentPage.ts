import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'



export const useCurrentPage = create(
  persist(
    (set, get) => ({
      currentPage: "dashboard",
      moveToFlows: () => set({currentPage:"flows"}),
      moveToInvoices:() => set({currentPage:"invoices"}),
     moveToDashBored: () => set({currentPage:"dashboard"}),
     //@ts-ignore
     getCurrentPage : () => get().currentPage 
    }),
    {
      name: 'current-page-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

  
