import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "../firebase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null);
    const [loading ,setLoading] = useState(true)
    
    //sign with email and password
    const signUpWithEmailPass = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login with email password
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }



    //current user
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            // console.log(currentUser);
        })
        return () => unSubscribe();
    },[])

    // log out

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        signUpWithEmailPass,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children }
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children  : PropTypes.node,
};

export default AuthProvider;