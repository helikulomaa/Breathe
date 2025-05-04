// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhzOHZnjrfyu1KeKFc_0g3mOe1qxU9tgE",
    authDomain: "breathe-106ad.firebaseapp.com",
    databaseURL: "https://breathe-106ad-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "breathe-106ad",
    storageBucket: "breathe-106ad.firebasestorage.app",
    messagingSenderId: "207487976998",
    appId: "1:207487976998:web:a8452f20ff52b1baba88e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };