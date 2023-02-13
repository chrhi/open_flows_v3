import CircularProgress from '@mui/material/CircularProgress';
import {app_statusReducer} from "@/store"

export default  function Loading() {

    const {is_loading} = app_statusReducer()
    
  return (
    <div className={`${is_loading ? "absolute" : "hidden"} z-[30000] top-0 bottom-0 left-0 right-0 bg-white bg-opacity-60 flex justify-center items-center`}>
<CircularProgress disableShrink />
    </div>
  )
}

