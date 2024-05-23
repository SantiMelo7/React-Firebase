import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Cancel, CheckCircle, DeleteForever } from "@mui/icons-material";

export function FirestoreDB() {
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

  const getMovies = async () => {
    try {
      const res = await getDocs(refCollection);
      const filteredData = res.docs.map((text) => ({
        ...text.data(),
        id: text.id,
      }));
      setMovieList(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

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

  async function handleDeleteMovie(id) {
    const filterDataRemove = doc(db, "movies", id);
    try {
      await deleteDoc(filterDataRemove);
      getMovies();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1 className="text-3xl font-extrabold mt-4 uppercase">
        Firestore Database
      </h1>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-x-20 mt-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-y-4"
        >
          <input
            placeholder="Title"
            id="title"
            name="title"
            value={formMovies.title}
            onChange={(ev) => handleChange("title", ev.target.value)}
          />
          <input
            placeholder="ReleaseDate"
            id="releaseDate"
            name="releaseDate"
            value={formMovies.releaseDate}
            onChange={(ev) => handleChange("releaseDate", ev.target.value)}
          />
          <label>receivedAndOscar</label>
          <input
            id="receivedAndOscar"
            type="checkbox"
            name="receivedAndOscar"
            checked={formMovies.receivedAndOscar}
            onChange={(ev) =>
              handleChange("receivedAndOscar", ev.target.checked)
            }
          />
          <button>Submit</button>
        </form>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:mt-7 md:mt-0 gap-x-10">
          {movieList.map((text) => (
            <div key={text.id} className="mb-10">
              <h1>{text.title}</h1>
              <span>Year: {text.releaseDate}</span>
              <div>
                {text.receivedAndOscar ? (
                  <CheckCircle style={{ color: "green" }} />
                ) : (
                  <Cancel style={{ color: "red" }} />
                )}
              </div>
              <button
                type="button"
                onClick={() => handleDeleteMovie(text.id)}
                className="removeMovie"
              >
                <div className="flex justify-center items-center gap-x-4">
                  <DeleteForever />
                  Remove
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="border-[0.5px] border-blue-500 mt-3 w-full" />
    </>
  );
}
