import { useEffect, useState } from "react";
import { auth, realTimeDB } from "../../config/firebase";
import { set, ref, onValue, remove, update } from "firebase/database";
import { v4 } from "uuid";
import { Cancel, Delete, Edit } from "@mui/icons-material";

export const RealTimeDataBase = () => {
  const [tools, setTools] = useState("");

  const [toolsContent, setToolsContent] = useState([]);

  const [isEdit, setIsEdit] = useState(false);

  const [editTool, setEditTool] = useState("");

  const nameCreated = auth?.currentUser?.displayName;

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

  //crear
  const writeToDB = () => {
    const uid = v4();
    set(ref(realTimeDB, `/${uid}`), {
      todo: tools,
      uid: uid,
      displayName: nameCreated,
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

  return (
    <>
      <h1 className="text-3xl font-extrabold mt-4 uppercase">
        Real Time DataBase
      </h1>
      <div className="mt-10 mb-10 flex gap-y-5 flex-col">
        <input
          type="text"
          placeholder="Agrega una tarea"
          value={tools}
          onChange={handleChange}
        />
        {!isEdit ? (
          <button className="google" onClick={writeToDB}>
            Submit
          </button>
        ) : (
          <div className="flex gap-x-5">
            <button className="google" onClick={() => handleEdit(tools)}>
              Edit
            </button>
            <button
              className="google"
              onClick={() => {
                setTools("");
                setIsEdit(false);
              }}
            >
              <Cancel />
            </button>
          </div>
        )}
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-10">
        {toolsContent.map((tools) => (
          <>
            <div
              key={tools.id}
              className="bg-blue-200 p-4 mb-4 flex flex-col justify-center items-center rounded-md w-72"
            >
              <h1 className="text-2xl font-extrabold">{tools.todo}</h1>
              <div className="flex flex-row mt-3 gap-x-5">
                <button onClick={() => handleDelete(tools)}>
                  <Delete
                    className="text-red-500"
                    style={{ width: "30px", height: "30px" }}
                  />
                </button>
                <button onClick={() => handleEditSub(tools)}>
                  <Edit
                    className="text-green-500"
                    style={{ width: "30px", height: "30px" }}
                  />
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
