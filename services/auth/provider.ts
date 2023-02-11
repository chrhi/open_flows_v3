import {supabase} from '@/config/supabase'
import {setCookieAuth , removeCookie} from "../../util/useCookie"


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
 return data.user
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
  //if we have a user then set the cookie
  if(data?.session){
  
    return data.user
  // setUser({
   
  // })

  }

}

export const logout = async () => {
  
let { error } = await supabase.auth.signOut()

if(error){
  console.error(error)
  return
}

window?.location.reload()
}


export const getCurrentUser = async () => {
  try{
    const { data: { user } } = await supabase.auth.getUser()
    return  user
  }catch(err){
    console.error(err)
  }
  

}