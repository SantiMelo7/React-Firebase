import { useEffect, useState } from "react";
import { refCollectionMusic } from "../config/collections";
import { auth, db } from "../config/firebase";
import { addDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";

export function useFirestoreRealTimeDb() {
    const [formMusic, setFormMusic] = useState({
        title: "",
        album: "",
        receivedAndBillboard: false,
    });

    const [musicList, setMusicList] = useState([]);

    const handleChange = (name, value) => {
        setFormMusic((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        const getMusic = onSnapshot(refCollectionMusic, (snapshot) => {
            setMusicList(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );

        });

        return () => {
            getMusic();
        };
    }, []);

    async function handleSubmit(ev) {
        ev.preventDefault();
        try {
            const response = await addDoc(refCollectionMusic, {
                title: formMusic.title,
                album: formMusic.album,
                receivedAndBillboard: formMusic.receivedAndBillboard,
                userIdAuth: auth?.currentUser?.uid,
            });
        } catch (error) {
            console.log(error);
        }
    }

    // eliminar
    async function handleDeleteMusic(id) {
        const filterDataRemove = doc(db, "music", id);
        try {
            await deleteDoc(filterDataRemove);
        } catch (error) {
            console.log(error);
        }
    }
    return { formMusic, handleChange, musicList, handleSubmit, handleDeleteMusic }
}