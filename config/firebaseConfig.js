// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN16NJj8LbhiMwPciq9QjmeDljlaTWqAQ",
  authDomain: "dine-time-yt-55c2a.firebaseapp.com",
  projectId: "dine-time-yt-55c2a",
  storageBucket: "dine-time-yt-55c2a.firebasestorage.app",
  messagingSenderId: "73150657068",
  appId: "1:73150657068:web:26547b256a9638d3241789",
  measurementId: "G-RXD4DEKVQS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);