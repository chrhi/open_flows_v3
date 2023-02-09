import {supabase} from '@/config/supabase'

export const createUserWithEmailAndPassword = async (email:string , password:string ) => {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password:password
  }
  )
  if(error){
    console.error(error)
    return
  }
  console.log("every thing went good")
  console.log(data)
}

export const singInWithEmailAndPassword  = async (email:string , password:string) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })
  if(error){
    console.error("error" + error)
    return
  }
  console.log(data)

}

export const logout = async () => {
  
let { error } = await supabase.auth.signOut()
if(error){
  console.error(error)
  return
}
}


export const getCurrentUser = async () => {
  try{
    const { data: { user } } = await supabase.auth.getUser()
    return  user
  }catch(err){
    console.error(err)
  }
  

}