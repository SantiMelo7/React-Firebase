import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
} from "firebase/firestore";
import { db, auth } from "../config/firebase"
import { useEffect, useState } from "react";

export function useFirestoreDb() {
    const [movieList, setMovieList] = useState([]);
    const refCollection = collection(db, "movies");

    const [formMovies, setFormMovies] = useState({
        title: "",
        releaseDate: "",
        receivedAndOscar: false,
    });

    const handleChange = (name, value) => {
        setFormMovies((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // mostrar
    const getMovies = async () => {
        try {
            const res = await getDocs(refCollection);
            const filteredData = res.docs.map((text) => ({
                ...text.data(),
                id: text.id,
            }));
            setMovieList(filteredData);
            setFormMovies("");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    // mandar
    async function handleSubmit(ev) {
        ev.preventDefault();
        try {
            const response = await addDoc(refCollection, {
                title: formMovies.title,
                releaseDate: formMovies.releaseDate,
                receivedAndOscar: formMovies.receivedAndOscar,
                userIdAuth: auth?.currentUser?.uid,
            });
            getMovies();
        } catch (error) {
            console.log(error);
        }
    }

    // eliminar
    async function handleDeleteMovie(id) {
        const filterDataRemove = doc(db, "movies", id);
        try {
            await deleteDoc(filterDataRemove);
            getMovies();
        } catch (error) {
            console.log(error);
        }
    }
    return { movieList, formMovies, handleChange, handleSubmit, handleDeleteMovie }
}