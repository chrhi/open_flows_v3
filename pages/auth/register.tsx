import Register from "@/components/auth/register"





function index() {

  // const [email , setEmail] = useState<string>()
  // const [password , setPassword] = useState<string>()

  // const handleSubmit = async () => {
  //   if(!email || !password) return 

  //   await createNewAccount(email , password)

  // }



// onClick={handleSubmit}
//onChange={(e) => setEmail(e.target.value) } 
//onChange={(e) => setPassword(e.target.value) } 

  return (
   <div className='w-full h-screen  bg-gradient-to-r from-sky-500 to-indigo-600 flex justify-center items-center'>
    <Register />
   
  </div>
  )
}

export default index