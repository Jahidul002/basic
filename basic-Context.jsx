import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import appp from '../Firebase/Firebase.config';




export const authContext = createContext()
// const auth = getAuth(appp)

const Context = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // const creatUser = (email, password) => {
    //     setLoading(true)
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }
    // const signIN = (email, password) => {
    //     setLoading(true)
    //     return signInWithEmailAndPassword(auth, email, password)
    // }

    // const googleLogIn = (provider) => {
    //     setLoading(true)
    //     return signInWithPopup(auth, provider)
    // }
    // const UpdtUserProfile = (profile) => {
    //     setLoading(true)
    //     return updateProfile(auth.currentUser, profile)
    // }
    // const LogOut = () => {
    //     setLoading(true)
    //     return signOut(auth)
    // }

    // const sample = {
    //     name: 'emon'
    // }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         console.log(currentUser);
    //         setUser(currentUser)
    //         setLoading(false)
    //     })

    //     return () => {
    //         unsubscribe();
    //     }
    // }, [])


    const AuthInfo = { user, setUser, creatUser, signIN, googleLogIn, LogOut, loading, UpdtUserProfile, sample }
    return (
        <div>
            <authContext.Provider value={AuthInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default Context;