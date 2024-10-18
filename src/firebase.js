// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; // Ensure you're importing getAuth from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyA9agUfx7g3kYjv1Peu-6-SNaGT30Gs8K0",
  authDomain: "savannah-informatics-9004b.firebaseapp.com",
  projectId: "savannah-informatics-9004b",
  storageBucket: "savannah-informatics-9004b.appspot.com",
  messagingSenderId: "356834790169",
  appId: "1:356834790169:web:4484862bae3d3426681388",
  measurementId: "G-069FEGEE14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
