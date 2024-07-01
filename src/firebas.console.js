// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx9UZInzhpO7k5fZ4siu_9MzpcX_M9zdE",
  authDomain: "cu-payment-297cb.firebaseapp.com",
  projectId: "cu-payment-297cb",
  storageBucket: "cu-payment-297cb.appspot.com",
  messagingSenderId: "85857648400",
  appId: "1:85857648400:web:30f4552752830b586bef95",
  measurementId: "G-1S5MD1C6X4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;