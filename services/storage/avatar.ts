import { supabase } from "@/config/supabase"
import { ID } from "@/static/types"

// Use the JS library to download a file.
// this to download file
//const { data, error } = await supabase.storage.from('avatars').download('public/avatar1.png')

export const save_image = async (user_id:ID , image_name :string , file :any ) => {
    const path:string = user_id + "/" +  image_name 
    const {data , error} = await supabase.storage
    .from("avatars")
    .upload(path , file)
    if(error){
        console.error(error)
        return
    }
}

export const get_image =  (user_id:ID , image_name :string) : string => {
    const path = user_id + "/" + image_name
    const {data } =  supabase.storage.from("avatars").getPublicUrl( path )
    const decodedUrl = decodeURI(data.publicUrl)
    return decodedUrl
}