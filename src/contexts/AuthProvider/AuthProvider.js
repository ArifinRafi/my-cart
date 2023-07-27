import React, { createContext, useEffect } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';






export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //Login
    const login =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Logout
    const logout = ()=> {
        return signOut(auth);
    }

    useEffect (()=> {
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            console.log(currentUser.email);
        });
        return () => {
            unsubscribe();
        } 
    }, [])
    
    const authInfo = {
        user,
        loading,
        createUser,
        logout,
        login
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;