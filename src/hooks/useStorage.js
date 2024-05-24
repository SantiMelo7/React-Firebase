import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { storage } from "../config/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

export function useStorage() {
    const [files, setFiles] = useState(null);
    const [imgsContent, setImgsContent] = useState([]);

    const handleChange = (e) => {
        setFiles(e.target.files[0])
    }

    async function uploadFile(file) {
        const storageRef = ref(storage, `cristiano-ronaldo/${v4()}`);
        return await uploadBytes(storageRef, file);
    }

    // crear
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await uploadFile(files);
            console.log({ result });
        } catch (error) {
            alert("Lo sentimos fallo");
        }
    };

    // ver
    useEffect(() => {
        listAll(ref(storage, "cristiano-ronaldo")).then((imgs) => {
            setImgsContent([]);
            imgs.items.map((val) => {
                getDownloadURL(val).then((url) => {
                    setImgsContent((data) => [...data, url]);
                });
            });
        });
    }, []);

    return { setFiles, handleSubmit, imgsContent }
}