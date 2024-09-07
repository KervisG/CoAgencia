// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importar Firestore
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
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
const analytics = getAnalytics(app); // Esto es para Analytics, si lo necesitas
const db = getFirestore(app); // Inicializar Firestore

export { db };
