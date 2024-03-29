import { supabase } from "@/config/supabase"
import { ID } from "@/static/types"
import { saveAs } from 'file-saver';

// Use the JS library to download a file.
// this to download file
//const { data, error } = await supabase.storage.from('avatars').download('public/avatar1.png')


//c8dc96e8-a6c8-4b7c-97e3-5e7977f7389f api key
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
    const decodedUrl = decodeURI(data.publicUrl)
    return decodedUrl
}

export const downloadPdf = async (project_id:ID , doc_id :ID) => {
    const path = project_id + "/" + doc_id
    const { data, error } = await supabase.storage.from('documents').download(path)
    if(error){
        console.error(error)
        return
    }
    saveAs(data, `${doc_id}.pdf`);
}