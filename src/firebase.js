// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlYi_QpinYJwZZcN93H5MKhzQ8Zt1ZUqk",
  authDomain: "to-do-app-52e73.firebaseapp.com",
  projectId: "to-do-app-52e73",
  storageBucket: "to-do-app-52e73.appspot.com",
  messagingSenderId: "461520638183",
  appId: "1:461520638183:web:044bacae6b7cd12f11d242",
  measurementId: "G-1X8NR31EPH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
