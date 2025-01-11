// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXCLmDi2PdV3Gkwi6m53jgs6KGO3BkyO4",
  authDomain: "emma-s-dashboard.firebaseapp.com",
  projectId: "emma-s-dashboard",
  storageBucket: "emma-s-dashboard.firebasestorage.app",
  messagingSenderId: "824071076454",
  appId: "1:824071076454:web:ac3e7371a846458a698ba7",
  measurementId: "G-HCY2LFHSFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, collection, addDoc, deleteDoc, doc, getDocs, query, where };

