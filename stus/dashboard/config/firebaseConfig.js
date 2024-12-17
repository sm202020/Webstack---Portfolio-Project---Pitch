// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOl74VEOr658f4nKHgoRM05ib0HMZ5WtE",
  authDomain: "stus-task-management-app.firebaseapp.com",
  projectId: "stus-task-management-app",
  storageBucket: "stus-task-management-app.firebasestorage.app",
  messagingSenderId: "395735886982",
  appId: "1:395735886982:web:100b5379643354e5e83507",
  measurementId: "G-989VRE3TN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;