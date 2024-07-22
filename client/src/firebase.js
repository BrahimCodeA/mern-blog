// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-432cc.firebaseapp.com",
  projectId: "mern-blog-432cc",
  storageBucket: "mern-blog-432cc.appspot.com",
  messagingSenderId: "535063649711",
  appId: "1:535063649711:web:ea1f6318ad54b13b2b635a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);