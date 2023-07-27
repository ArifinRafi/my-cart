import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';






const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true);
    
    const authInfo = {
        user,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;