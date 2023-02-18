import { toast } from "react-toastify"



export const useCheckInternet =  () => {


 return () =>    toast("there is no internet connection ",{
        className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
        hideProgressBar: true,
       })

}