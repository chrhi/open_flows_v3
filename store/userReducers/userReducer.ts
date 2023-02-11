import { ID } from '@/static/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { User } from '@/static/types'



type userReducerType = {
  user_id:ID , 
  user:User,
  setUser:(input :User) => void,
  set_user_id :(input : ID ) =>  Promise<void>

}




export const userReducer = create<userReducerType ,[["zustand/persist",unknown]]>(
  persist(
    (set) => ({
      user_id: "" as ID,
      user:{
        id:"" as ID, 
        email:"" ,
        photo_url : "" , 
        name:"",
        workspaces:undefined ,
        team :  undefined
      },
      
      set_user_id: async ( input:ID) => {
       
        set({user_id : input })
      },
      setUser:  (input : User) =>{
        set({user : input })
      }
   
    }),
    {
      name: 'current-user-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
//[],[["zustand/persist",unknown]]