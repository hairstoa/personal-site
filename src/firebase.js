import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "personalsite-c6d45.firebaseapp.com",
  projectId: "personalsite-c6d45",
  storageBucket: "personalsite-c6d45.appspot.com",
  messagingSenderId: "451638834790",
  appId: "1:451638834790:web:5e8ff5ae7baa9ddca21fa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);