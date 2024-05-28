import { useEffect, useState } from "react";
import { auth, realTimeDB } from "../config/firebase";
import { set, ref, onValue, remove, update } from "firebase/database";
import { v4 } from "uuid"

export function useRealTimeDb() {

    const [tools, setTools] = useState("");

    const [toolsContent, setToolsContent] = useState([]);

    const [isEdit, setIsEdit] = useState(false);

    const [editTool, setEditTool] = useState("");

    //const nameCreated = auth?.currentUser?.displayName;

    const handleChange = (e) => {
        setTools(e.target.value);
    };

    // ver en vivo
    useEffect(() => {
        onValue(ref(realTimeDB), (snapshot) => {
            setToolsContent([]);
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((text) => {
                    setToolsContent((old) => [...old, text]);
                });
            }
        });
    }, []);

    // crear
    const writeToDB = () => {
        const uid = v4();
        set(ref(realTimeDB, `/${uid}`), {
            todo: tools,
            uid: uid,
        });
        setTools("");
    };

    // delete
    const handleDelete = (tools) => {
        remove(ref(realTimeDB, `/${tools.uid}`));
    };

    // editar
    const handleEditSub = (tool) => {
        setIsEdit(true);
        setEditTool(tool.uid);
        setTools(tool.todo);
    };

    const handleEdit = (tools) => {
        update(ref(realTimeDB, `/${editTool}`), {
            todo: tools,
            uid: editTool,
        });
        setEditTool(true);
        setTools("");
    };

    return { tools, toolsContent, isEdit, editTool, handleChange, writeToDB, handleDelete, handleEditSub, handleEdit }
}