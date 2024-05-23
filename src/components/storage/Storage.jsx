import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { storage } from "../../config/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
//import { Download } from "@mui/icons-material";

export const Storage = () => {
  const [files, setFiles] = useState(null);
  //const [urlImg, setUrlImg] = useState("");

  const [imgsContent, setImgsContent] = useState([]);

  async function uploadFile(file) {
    const storageRef = ref(storage, `cristiano-ronaldo/${v4()}`);
    return await uploadBytes(storageRef, file);
    //const url = await getDownloadURL(storageRef);
    //return url;
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
      imgs.items.map((val) => {
        getDownloadURL(val).then((url) => {
          setImgsContent((data) => [...data, url]);
        });
      });
    });
  }, []);

  return (
    <>
      <h1 className="text-3xl font-extrabold mt-4 uppercase">Storage</h1>
      <div className="mt-3 mb-10 flex flex-col gap-y-4">
        <button
          type="button"
          className="w-72 p-1 rounded-md border-[1px] text-white bg-pink-300
            text-xl text-center h-10 font-bold hover:scale-110 hover:transition-all hover:bg-blue-900 hover:text-white"
        >
          <label htmlFor="storage" className="my-auto mx-auto text-center">
            Agregar una nueva foto
          </label>
          <input
            id="storage"
            type="file"
            name="storage"
            onChange={(ev) => setFiles(ev.target.files[0])}
          />
        </button>
        <button type="submit" onClick={handleSubmit} className="generic">
          Upload
        </button>
      </div>
      {/* <Download
        className="text-red-500"
        style={{ width: "40px", height: "40px" }}
      />
      <a
        href={urlImg}
        target="_blank"
        className="mt-4 mb-4 underline text-gray-800 font-extrabold"
      >
        {urlImg}
      </a>*/}
      <div className="grid md:grid-cols-6 sm:grid-cols-2 gap-x-5 gap-y-5 md:p-0 sm:p-3">
        {imgsContent.map((text) => {
          return (
            <div key={text.id} className="bg-amber-300 p-3 rounded-md">
              <img className="rounded-lg w-[200px] h-[200px]" src={text} />
            </div>
          );
        })}
      </div>

      <div className="border-[0.5px] border-blue-500 mt-3 w-full" />
    </>
  );
};
