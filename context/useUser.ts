import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'







export const useUser = create(
  persist(
    (set) => ({
      user_id: "",
      setUser: async ( user_id:string | number) => {
       
        set({user_id })
      },
   
    }),
    {
      name: 'current-user-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)