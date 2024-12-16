// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZoVcH9zoAEC8YmZDYejHmytOOXxgu4FY",
  authDomain: "xcontact-762a3.firebaseapp.com",
  databaseURL: "https://xcontact-762a3-default-rtdb.firebaseio.com",
  projectId: "xcontact-762a3",
  storageBucket: "xcontact-762a3.firebasestorage.app",
  messagingSenderId: "336642747927",
  appId: "1:336642747927:web:e02da4090689acb132b652",
  measurementId: "G-761J9G8SG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
export const db = getFirestore(app)
export default app