import { supabase } from "@/config/supabase"
import { ID } from "@/static/types"


export const save_image_flow = async (flow_id:ID , image_id :string , file :any ) => {
    const path:string = flow_id + "/" +  image_id 
    const {data , error} = await supabase.storage
    .from("fkows-images")
    .upload(path , file)
    if(error){
        console.error(error)
        return
    }
}

export const get_image_flow =  (flow_id:ID , image_id :string) : string => {
    const path = flow_id + "/" + image_id
    const {data } =  supabase.storage.from("fkows-images").getPublicUrl( path )
    const decodedUrl = decodeURI(data.publicUrl)
    return decodedUrl
}