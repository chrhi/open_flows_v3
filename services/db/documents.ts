import { supabase } from "@/config/supabase";
import type { ID } from "@/static/types";


export const create_document_row = async (project_id :ID , name:string , id :ID ) => {
    const { data, error } = await supabase
  .from('docs')
  .insert([
    {id , project_id, name },
  ])
  if(error){
    console.error(error)
    return
  }
}


export const get_document_row_info = async (project_id:ID) =>{
    let { data: documents, error } = await supabase
  .from('docs')
  .select('*')
  .eq("project_id", project_id)
  return documents
}