import { collection } from "firebase/firestore";
import { db } from "./firebase";

export const refCollectionMovies = collection(db, "movies");
export const refCollectionMusic = collection(db, "music");