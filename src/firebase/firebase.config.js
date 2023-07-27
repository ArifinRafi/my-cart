// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHypgQwKpYPa9bFM-Y77q99UPHoEcvWDc",
  authDomain: "roboway-website.firebaseapp.com",
  projectId: "roboway-website",
  storageBucket: "roboway-website.appspot.com",
  messagingSenderId: "425837225933",
  appId: "1:425837225933:web:a5da7ec8a95e3c12310684",
  measurementId: "G-68NDRF34NF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;