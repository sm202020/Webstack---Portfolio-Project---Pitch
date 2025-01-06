// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClbn7ZrqRlvpJDgDKhFt8oWTghGWa1aR0",
  authDomain: "stus-6714f.firebaseapp.com",
  projectId: "stus-6714f",
  storageBucket: "stus-6714f.appspot.com",
  messagingSenderId: "496601729164",
  appId: "1:496601729164:web:341a4dc127cab715ce93a9",
  measurementId: "G-G28ZR0MWW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;