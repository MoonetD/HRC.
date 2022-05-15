import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/styles.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore, doc, collection, getDocs,getDoc } from 'firebase/firestore/lite';
import { addDoc, setDoc } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiDKevHPkyVn9Q7BzmKowbAr4rHL_Qz8Y",
  authDomain: "test-authendication-project.firebaseapp.com",
  databaseURL: "https://test-authendication-project-default-rtdb.firebaseio.com",
  projectId: "test-authendication-project",
  storageBucket: "test-authendication-project.appspot.com",
  messagingSenderId: "508647974331",
  appId: "1:508647974331:web:16bba0edc8908c3b10509e",
  measurementId: "G-FBVHLXY6ZL"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


const app = createApp(App)

app.use(router)

app.mount('#app')
