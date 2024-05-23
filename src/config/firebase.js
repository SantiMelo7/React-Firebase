// Inicializar la APP
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBbJ4iyMCwjnk6U2jbGMWY-i5WJrrPWAbk",
    authDomain: "aprendiendo-firebase-56013.firebaseapp.com",
    //dataBaseUrl: "https://aprendiendo-firebase-56013-default-rtdb.firebaseio.com",
    projectId: "aprendiendo-firebase-56013",
    storageBucket: "aprendiendo-firebase-56013.appspot.com",
    messagingSenderId: "8002690116",
    appId: "1:8002690116:web:e3d984ba660ffd9bb27011",
    measurementId: "G-FV4QM1X52H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)