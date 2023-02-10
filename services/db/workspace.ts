import {supabase} from '@/config/supabase'
import { v4 as uuidv4 } from 'uuid';

type ID = string | number


export const create_workspace = async (owner:ID , name : string) => {
  
   const { data, error } = await supabase
  .from('workspaces')
  .insert([
    { owner, name  , members:[owner]  },
  ])
}