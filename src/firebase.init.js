// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwIIJ1CepIw5V8DkhXFOYqqQwCgfpcO4U",
    authDomain: "ahatasam-wild-photograph-7e28d.firebaseapp.com",
    projectId: "ahatasam-wild-photograph-7e28d",
    storageBucket: "ahatasam-wild-photograph-7e28d.appspot.com",
    messagingSenderId: "883649273448",
    appId: "1:883649273448:web:154a469a4bada1a2d3a5dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;