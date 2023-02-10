import { ID } from '@/static/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


export const useStatus = create(
  persist(
    (set) => ({
      is_error: false ,
      error_payload :'',
      current_user_id: '',
      current_user_photo_url :'',
      current_user_email : '',
      current_user_name :'',
      current_work_space_name :'',
      current_work_space_id :'',
      //user information
      set_user_id: (user_id :ID) => set({ current_user_id:  user_id  }),
      set_user_photo: (user_photo :string) => set({ current_user_photo_url:  user_photo  }),
      set_user_email: (user_email :string) => set({ current_user_email:  user_email  }),
      set_user_name: (user_name :string) => set({ current_user_name:  user_name  }),
      //current workspace
      set_workspace_name :(name :string ) => set({current_work_space_name: name}),
      set_workspace_id :(workspace_id : ID) => set({current_work_space_id : workspace_id})
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

// export const set_user_credentials = (id : ID , photo:string , email:string ,name :string ) =>{
//  //@ts-ignore
//   const set_user_id = status(state => state?.set_user_id)
//    //@ts-ignore
//    const set_user_photo = status(state => state?.set_user_photo)
//     //@ts-ignore
//   const set_user_email = status(state => state?.set_user_email)
//    //@ts-ignore
//    const set_user_name = status(state => state?.set_user_name)
//    set_user_id(id)
//    set_user_photo(photo)
//    set_user_name(name)
//    set_user_email(email)
   
// }

// export const get_user_credentials = () => {
//   //@ts-ignore
//   const current_user_id = status(state => state?.current_user_id)
//    //@ts-ignore
//    const current_user_photo_url = status(state => state?.current_user_photo_url)
//     //@ts-ignore
//   const current_user_email = status(state => state?.current_user_email)
//    //@ts-ignore
//    const current_user_name = status(state => state?.current_user_name)

//    return {id : current_user_id , photo_url :current_user_photo_url , email:current_user_email, name :current_user_name }

// }

// export const set_workspace = (id:ID , name : string) => {
//     //@ts-ignore
//     const set_workspace_name = status(state => state?.set_workspace_name)
//      //@ts-ignore
//     const set_workspace_id = status(state => state?.set_workspace_id)
//     set_workspace_name(name)
//     set_workspace_id(id)
// }

// export const get_workspace = () => {
//   //@ts-ignore
//   const current_work_space_name = useStatus(state => state?.current_work_space_name)
//    //@ts-ignore
//   const current_work_space_id = useStatus(state => state?.current_work_space_id)
  
//   return {name : current_work_space_name , id : current_work_space_id}
// }