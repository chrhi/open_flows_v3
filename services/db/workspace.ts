import {supabase} from '@/config/supabase'
import type { ID } from '@/static/types'




export const create_workspace = async (owner:ID , name : string) => {
  
   const { data, error } = await supabase
  .from('workspaces')
  .insert([
    { owner, name  , members:[owner]  },
  ])
}

export const get_workspaces = async (user_id :ID) =>{
  let { data: workspaces, error } = await supabase
  .from('workspaces')
  .select('*')
 .eq("owner", user_id)
  if(error){
    console.error(error)
    return
  }
  return workspaces
}

