import { supabase } from "@/config/supabase";
import type { ID } from "@/static/types";


export const create_flow = async (
    workspace_id :ID , 
    title : string ,
    brief : string ,
    status :boolean ,
    icon_url :string ,
    starts_at : string ,
    ends_at : string , 
    members : [ID]) => {

      const { data, error } = await supabase
  .from('flow')
  .insert([
    { workspace_id,title , brief , status , icon_url , starts_at , ends_at , members },
  ])
  if(error){
    console.error(error)
    return
  } 
  console.log("from create flow :" + data)
}


export const get_flows = async (workspace_id : string | number) =>{
    //todo handle getting all the flows
    let { data: flows, error } = await supabase
  .from('flow')
  .select("*")
  .eq("workspace_id", workspace_id)
  if(error) {
    console.error(error)
  }
  return flows
}

export const get_flow = async (id :ID) =>{
      //todo handle getting all the flows
      let { data: flows, error } = await supabase
      .from('flow')
      .select("*")
      .eq("id", id)
      if(error) {
        console.error(error)
      }
      return flows
}