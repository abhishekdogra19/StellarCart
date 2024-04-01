// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
  authDomain: "stellar-cart.firebaseapp.com",
  projectId: "stellar-cart",
  storageBucket: "stellar-cart.appspot.com",
  messagingSenderId: import.meta.env.VITE_REACT_APP_RAPID_MSGSENDER_Id,
  appId: "1:125509153987:web:f2aa9dd466b77e21349e76",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
