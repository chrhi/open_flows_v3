import { LoadingButton } from '@mui/lab'
import { create_profile } from '@/services/db/users'
import { create_workspace } from '@/services/db/workspace'
import { useRouter } from 'next/router'
import { style } from '@/static/tailwind'
import { save_image } from '@/services/storage/avatar'
import { v4 as uuidV4 } from "uuid"
import { userReducer } from '@/store'
import {useState , useRef} from 'react'

export default function AcountDetails() {

    const router = useRouter()

    const fileRef = useRef<HTMLInputElement>(null)

  
  
      const [isLoading , setIsLoading] = useState<boolean>(false)
      //getting the user id from the register form 
      //@ts-ignore
      const user = userReducer(state => state.user_id)

    //graphing the data
    const [first_name , set_fist_name] = useState<string>()
    const[last_name , set_last_name] = useState<string>()
    const [work_space , set_work_space] = useState<string>()
    const [photo_url , set_photo_url] = useState<string>()
      

    //this function will handle the submit event
    const handleSubmit = async () => {
  //  if there is no data then we should return
     if(!first_name || !last_name  || !work_space) return
     setIsLoading(prev => prev = !prev)
     
     if(!user){
      console.error("there is no user")
      return
     }
     console.log("this is the user " + user)
     const image_name : string = uuidV4();
     const data = await create_profile(user ,first_name , last_name , image_name).catch(err => console.error(err))
     const succuss = await create_workspace(user , work_space).catch(err => console.error(err))
    // @ts-ignore
     if(fileRef.current?.files[0]){
     await save_image(user, image_name, fileRef.current?.files[0]! )
     }
     
     setIsLoading(prev => prev = !prev)
     //console.log(data, succuss)
     console.log(data)

     router.push("/auth/success")
      
    }
  
  
  
    return (
      <div className='w-[30%] md:w-[50%] grid grid-cols-2  h-fit shadow-xl rounded-lg bg-white '>
        <div className='col-span-2 h-[70px] p-4 flex justify-center'>
            <h1 className='text-xl font-bold '>tell us more about your self </h1>
        </div>
        <div className='flex flex-col px-4 gap-x-2'>
        <h1>your first name</h1>
        <input  className={style.input} placeholder='your name' onChange={(event) => set_fist_name(prev => prev = event.target.value)}  />
        </div>
        <div className='flex flex-col px-4 gap-x-2'>
        <h1>your last name</h1>
        <input  className={style.input} placeholder='your last name' onChange={(event) => set_last_name(prev => prev = event.target.value)}   />
        </div>
        <div className='flex flex-col col-span-2 px-4 my-3 '>
        <h1>create a workspace </h1>
        <input  className={style.input} placeholder='work space'  onChange={(event) => set_work_space(prev => prev = event.target.value)} />
        </div>
        <div className='flex flex-col col-span-2 px-4 my-3 '>
        <h1>enter a url for your photo </h1>
        <input  className={style.input} type='file' placeholder='url' ref={fileRef}  />
        </div>
        <div className='flex  col-span-2 p-4 my-3 '>
    
        <LoadingButton
      className="rounded   !text-white !text-lg bg-gradient-to-r from-sky-500 to-indigo-600"
     loading = {isLoading ? true : false}
     loadingPosition="start"
     onClick={handleSubmit}
     variant="contained"
 
     >
     {isLoading ? "proceeding" :  "save & continue" }
      </LoadingButton>      
        </div>

  
       
      
      
    
  
      {/* and this is the normal form */}
      
      </div>
  )
}



