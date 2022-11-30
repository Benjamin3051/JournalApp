// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDDCm7fPmnqBOvwLKd-WblLRK9ztubvcI",
  authDomain: "my-project-28582.firebaseapp.com",
  projectId: "my-project-28582",
  storageBucket: "my-project-28582.appspot.com",
  messagingSenderId: "20301619830",
  appId: "1:20301619830:web:771049b4eabc51ac6ff557"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);