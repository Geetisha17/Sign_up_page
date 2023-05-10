import { createContext, useContext ,useEffect ,useState} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {auth} from "../firebase"
const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    const [user,setUser] = useState(null);

    async function signUp (user,email,password){
        var a =await createUserWithEmailAndPassword(auth,email,password).then((userCredentails)=>{
            userCredentails.user.displayName=user;
        });
        return a;
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[]);
    return <userAuthContext.Provider value={{signUp,user,logIn}}>{children}</userAuthContext.Provider>
}

export function useUserAuth(){
    return useContext(userAuthContext);
}