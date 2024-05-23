import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { storage } from "../../config/firebase";

export const Storage = () => {
  const [files, setFiles] = useState(null);

  const [filesVisible, setFilesVisible] = useState([]);

  const handleClickUploadFile = async () => {
    if (!files) return;
    const folder = ref(storage, `cristiano-ronaldo/${files.name}`);
    try {
      const response = await uploadBytes(folder, files);
      const url = response.metadata;
      console.log({ response });
      setFilesVisible({ url });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mt-3 mb-10 flex flex-col gap-y-4">
        <button
          type="button"
          className="w-72 p-1 rounded-md border-[1px] text-white
            text-xl text-center h-10 font-bold hover:scale-110 hover:transition-all hover:bg-blue-900 hover:text-white"
        >
          <label htmlFor="storage" className="my-auto mx-auto text-center">
            Agregar una nueva foto
          </label>
          <input
            id="storage"
            type="file"
            onChange={(ev) => setFiles(ev.target.files[0])}
          />
        </button>
        <button onClick={handleClickUploadFile}>Upload</button>
        {filesVisible.map((text) => {
          console.log(filesVisible);
          return (
            <div key={text.id}>
              <img src={text.fullPath} width={50} height={50} />
            </div>
          );
        })}
      </div>
    </>
  );
};
