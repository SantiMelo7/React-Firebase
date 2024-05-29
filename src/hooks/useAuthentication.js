import { useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

export function useAuhtentication() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const auhtentication = auth

    const handleChange = (name, value) => {
        setFormData((prev) => ({
            ...prev, [name]: value
        }))
    }

    const [user, setUser] = useState(null)

    useEffect(() => {
        const onSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })

        return () => {
            onSubscribe()
        }
    }, [])


    const singIn = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    async function handleSingInWithGoogle() {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.log(error);
        }
    }

    async function logout() {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    }

    return { auhtentication, user, handleChange, formData, singIn, handleSingInWithGoogle, logout }
}