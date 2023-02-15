import { supabase } from "@/config/supabase"
import { ID } from "@/static/types"

// Use the JS library to download a file.
// this to download file
//const { data, error } = await supabase.storage.from('avatars').download('public/avatar1.png')

export const save_document = async (project_id:ID , doc_id :ID , file :any ) => {
    const path:string = project_id + "/" +  doc_id 
    const {data , error} = await supabase.storage
    .from("documents")
    .upload(path , file)
    if(error){
        console.error(error)
        return
    }
}

export const get_document =  (project_id:ID , doc_id :ID) : string => {
    const path = project_id + "/" + doc_id
    const {data } =  supabase.storage.from("documents").getPublicUrl ( path )
    return data.publicUrl
}