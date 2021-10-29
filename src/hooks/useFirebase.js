import {useEffect, useState} from "react"
import initializeAuthentication from "../pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication()

const useFirebase =()=>{
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    
    const signInUsingGoogle =()=>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }
    const logOut= ()=>{
        signOut(auth)
        .then(()=>{
        setUser({})
        })
        .finally(()=> setIsLoading(false))
    }

    useEffect(()=>{
       const unSubScribed =  onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            } else{
                setUser({})
            }
            setIsLoading(false)

        })
        return ()=> unSubScribed
    }, [])

    return{
        signInUsingGoogle,
        user,
        error,
        logOut,
        setIsLoading,
        isLoading
    }
}


export default useFirebase;
