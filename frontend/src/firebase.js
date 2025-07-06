// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "samaybihar-ea0ed.firebaseapp.com",
  projectId: "samaybihar-ea0ed",
  storageBucket: "samaybihar-ea0ed.firebasestorage.app",
  messagingSenderId: "733607694189",
  appId: "1:733607694189:web:972a6039170cba9a601464",
  measurementId: "G-M0ESERSW04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
