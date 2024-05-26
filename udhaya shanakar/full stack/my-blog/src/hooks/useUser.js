import { useState,useEffect } from "react"; 
import { getAuth,onAuthStateChanged } from "firebase/auth";

const useUser = ()=>{

    const [User,SetUser] = useState(null);
    const [IsLoading,SetLoading] = useState(true);

    useEffect(()=>{
        const userFound = onAuthStateChanged(getAuth(),(user) => {
            SetUser(user);
            SetLoading(false)
        });
        return userFound;
    },[]);

return {User,IsLoading}

} 

export default useUser;