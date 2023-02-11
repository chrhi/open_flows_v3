import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import  Head  from 'next/head'
import {useEffect} from "react"
import { supabase } from '@/config/supabase'
import {userReducer} from "@/store"
import { ID, User } from '@/static/types'




export default function App({ Component, pageProps }: AppProps) {

  //getting the reducer from thr store
  const setUser = userReducer(state => state.setUser)

 

 useEffect(() => {
  const user_credentials = async () => {
    //check if we have a user
   const response = await  supabase.auth.getSession().catch(error => console.error(error))
    if(response){
     
      const current_user :User ={ 
        id: response.data.session?.user.id as ID,
        email:  response.data.session?.user.email as string ,
        photo_url: "A",
        name:"A"
      } 
      setUser(current_user )
   
    }else{
      console.log("there is an error in the _app.ts file")
    }

  }
  user_credentials().then(()=>{
    console.log("every thing went good")
  })
  },[setUser])


  return(
    <>
     <Head>
        <title>Open Flows</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
       <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
       <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
    <NextNProgress options={{ showSpinner: false }} />
    
    <Component {...pageProps} />
    </>
  )
}
