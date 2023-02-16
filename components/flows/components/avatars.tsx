import Image from "next/image"
import salah from "@/images/salah.jpg"

function Avatars() {
  return (
    <div className="flex -space-x-2 overflow-hidden">
  
   {[1,2,3,4,5].map((item , index) => ( <Image
        key={index + "bear"}
         height={30}
         width={30}
      className="inline-block  h-8 w-8 rounded-full ring-2 ring-white"
      src={salah}
      alt=""
    />))
  }
  </div>
  )
}

export default Avatars