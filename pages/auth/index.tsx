import Login from "@/components/auth/Login"

const stype = {
  input :" w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
}

function index() {
  return (
   <div className='w-full h-screen bg-gray-50 flex justify-center items-center'>

    <Login />
   
  </div>
  )
}

export default index