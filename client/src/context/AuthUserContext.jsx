import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { app } from '../lib/firebase';
import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { onSnapshot } from "firebase/firestore";


const auth = getAuth(app);
const db = getFirestore(app);

const AuthUserContext = createContext({
    authUser: null,
    loading: true,
    signInwithEmail: async () => { },
    signInwithGoogle: async () => { },
    signUpwithEmail: async () => { },
    signOutUser: async () => { },
    userRole: null,

});

import { registerUser } from "../helper/registerUser";
import { getUserRole } from "../helper/getUserRole";

export function AuthUserProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [loading, setLoading] = useState(true);




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setAuthUser(user);
            setLoading(false);

            if (!user) {
                setUserRole(null);
                localStorage.removeItem("role");
                return;
            }

            try {
                const token = await user.getIdToken(true);
                await registerUser(user, token);
                const result = await getUserRole(user.uid, token);

                if (result.success) {
                    setUserRole(result.role);
                    localStorage.setItem("role", result.role);
                }
            } catch (err) {
                console.error("Auth context failed:", err);
            }
        });

        return () => unsubscribe();
    }, []);


    async function fetchUserRole(uid, token) {
    try {
        const backend = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/get-role`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ uid })
        });

        const data = await backend.json();

        if (data.success && data.role) {
            setUserRole(data.role);
            localStorage.setItem("role", data.role);
        }
    } catch (err) {
        console.error("Role fetch failed", err);
    }
}




    const signInwithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        return await signInWithPopup(auth, provider);
    }

    const signOutUser = async () => {
        return await signOut(auth);
    }

    const signUpwithEmail = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setAuthUser(userCredential.user);
            return userCredential;
        } catch (error) {
            console.error(error);
            toast.error(error);
            return null;
        }
    }
    const signInwithEmail = (email, password) => {
        try {
            const userCredential = signInWithEmailAndPassword(auth, email, password);
            setAuthUser(userCredential.user);
            return userCredential;
        } catch (error) {
            console.error(error);
            toast.error(error);
            return null;
        }
    }

    return (
        <AuthUserContext.Provider value={{ authUser, loading, signInwithEmail, signInwithGoogle, signOutUser, signUpwithEmail, userRole ,fetchUserRole }} >
            {children}
        </AuthUserContext.Provider>
    );
}


export const useAuth = () => useContext(AuthUserContext);