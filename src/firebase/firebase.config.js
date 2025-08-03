// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfotvwoWGNpAsz92uR4D4tTf3tQxbnXWM",
  authDomain: "coffee-shop-react-7af2b.firebaseapp.com",
  projectId: "coffee-shop-react-7af2b",
  storageBucket: "coffee-shop-react-7af2b.firebasestorage.app",
  messagingSenderId: "7571858003",
  appId: "1:7571858003:web:56a4318239cc23f130dca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;