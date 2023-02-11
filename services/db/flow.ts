import { supabase } from "@/config/supabase";
import type { ID } from "@/static/types";


export const create_flow = async (
    workspace_id :ID , 
    title : string ,
    brief : string ,
    status :string ,
    icon_url :string ,
    starts_at : string ,
    ends_at : string , 
    members : [ID]) => {

    //workspace_id title brief status icon_url members starts_at ends_at
    //todo handle creating a flow
    //filter : 
}


export const get_flows = async (workspace_id : string | number) =>{
    //todo handle getting all the flows
    let { data: flows, error } = await supabase
  .from('flows')
  .select("*")
  .eq("workspace_id", workspace_id)
  if(error) {
    console.error(error)
  }
  return flows
}