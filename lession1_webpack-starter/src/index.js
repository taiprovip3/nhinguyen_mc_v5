import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDBi-wiXdEgOCTtcXO7w3K6G_bvTrhulng",
    authDomain: "ultimatecloud-c4d19.firebaseapp.com",
    projectId: "ultimatecloud-c4d19",
    storageBucket: "ultimatecloud-c4d19.appspot.com",
    messagingSenderId: "482916212450",
    appId: "1:482916212450:web:47fee21680456e6ed588bb"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log('Hello there, this is the message from index.js: ', auth);