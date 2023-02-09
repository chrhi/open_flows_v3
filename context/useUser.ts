import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { supabase } from '@/config/supabase'






export const useUser = create(
  persist(
    (set) => ({
      User: {},
      setUser: async ( ) => {
        const { data: { user } } = await supabase.auth.getUser()
        set({ User: user })
      },
      removeUser: ()=> set({ User: {} })
    }),
    {
      name: 'current-user-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)