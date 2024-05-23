import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

export function useAuhtentication() {
    const authenticacion = auth;

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

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

    return { authenticacion, formData, singIn, handleSingInWithGoogle, logout }
}