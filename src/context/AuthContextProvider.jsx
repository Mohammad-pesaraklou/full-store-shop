import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';

export const authContext = createContext()

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {
            savedProduct: []
        })
    }
    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = (email, password) => {
        signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])
    return (
        <authContext.Provider value={{ signUp, signIn, logOut, user }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;