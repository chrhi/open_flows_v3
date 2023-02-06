import { getAuth  ,
        createUserWithEmailAndPassword ,
        signInWithEmailAndPassword ,
        signOut ,
        GoogleAuthProvider , 
        getRedirectResult, 
        signInWithRedirect} from "firebase/auth";
import { app } from "@/config/firebase";


//create an auth object
 const auth = getAuth(app)
//object from the fire base provider
 const provider = new GoogleAuthProvider()

 // this function will handle creating an account
 export const createNewAccount = async (email:string , password:string) =>{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password).catch((error) => {
                console.error(error.message)
              })
 }

 //this function will handle the logging out functionality
export const login = async (email:string , password:string) =>{
        const userCredential = await signInWithEmailAndPassword(auth , email , password).catch(err => console.log(err.message))
}

 //this function will handle the logging out functionality
 export const logout = async () => {
        await signOut(auth).catch(error => console.error(error.message))
 }

 const googleProvider = async () => {
        signInWithRedirect(auth, provider);
        getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result!);
      const token = credential?.accessToken;
     // Cookies.set('auth', result?.user.uid! );
      // The signed-in user info.
      const user = result?.user;
      return user ;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
 }

 //this will handle the log in functionality 
 export const loginWithGoogle = async () => {}

 //this will handle the logging out functionality 

 export const singInWithGoogle = async () => {}