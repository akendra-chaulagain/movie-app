
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API,
    authDomain: "netflix-5e0a5.firebaseapp.com",
    databaseUrl: "gs://netflix-5e0a5.appspot.com",
    projectId: "netflix-5e0a5",
    storageBucket: "netflix-5e0a5.appspot.com",
    messagingSenderId: "706848058379",
    appId: "1:706848058379:web:3fbab686d8e584799ceb0e",
    measurementId: "G-G0M5QW4SBM"
};

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)



