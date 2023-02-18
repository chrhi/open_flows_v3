import { toast } from "react-toastify"




export const useOnError = () => {
   return (input : string) => toast(input,{
    className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
    hideProgressBar: true,
   })
  
}