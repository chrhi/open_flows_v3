import { toast } from "react-toastify"




export const useOnError = (input : string) => {
  const display =   () => toast(input)
  display()
}