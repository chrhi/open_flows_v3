import {supabase} from '@/config/supabase'
import { ID } from '@/static/types'



export const get_user_profile =  async (user_id : ID) => {
// READ ALL ROWS
let { data: profiles, error } = await supabase
  .from('profiles')
  .select('*')
  .eq("id", user_id)
if(error){
    console.error(error)
    return
}
  return profiles
}

export const create_profile = async (id : string | number ,  first_name:string , last_name:string , photo_url:string ) => {
  
    const { data, error } = await supabase
  .from('profiles')
  .insert([
    { id , photo_url, last_name, first_name },
  ])
  if(error){
    console.error(error)
    return
  }
  return data
  
}