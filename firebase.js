// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHRZluqj-6fFbZDysqNYMf4Z2Cu6deTYU",
  authDomain: "eshop-918c9.firebaseapp.com",
  projectId: "eshop-918c9",
  storageBucket: "eshop-918c9.appspot.com",
  messagingSenderId: "1031754453415",
  appId: "1:1031754453415:web:0dd8375f4604770a53a682",
  measurementId: "G-519LG86F7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);