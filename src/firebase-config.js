// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtzL3V5xOM33jpQmwLjLZDuJ3SKqUnjLE",
  authDomain: "coagencia-c2274.firebaseapp.com",
  projectId: "coagencia-c2274",
  storageBucket: "coagencia-c2274.appspot.com",
  messagingSenderId: "730189623182",
  appId: "1:730189623182:web:1aa72efc1ac57c00a7bedf",
  measurementId: "G-6910W8V7T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);