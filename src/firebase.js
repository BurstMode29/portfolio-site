// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnP-xCHnbJBG3lZ3ryfQzeH3FsYsMPvd4",
  authDomain: "electron-app-17b68.firebaseapp.com",
  projectId: "electron-app-17b68",
  storageBucket: "electron-app-17b68.appspot.com",
  messagingSenderId: "203359530445",
  appId: "1:203359530445:web:ef87a98a269b3507d8e884"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);