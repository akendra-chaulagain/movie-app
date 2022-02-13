import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAnsw_xMvjk-dy0j9dAGVUp7ct8bfhM0Ow",
    authDomain: "netflix-8102c.firebaseapp.com",
    projectId: "netflix-8102c",
    storageBucket: "netflix-8102c.appspot.com",
    messagingSenderId: "687953499982",
    appId: "1:687953499982:web:ce0e0fcdace821aaab701f",
    measurementId: "G-FD3MJYVSMN"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;