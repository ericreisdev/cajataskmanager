// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtQ7t4XC_C4BGGfuCc59IFkUPR1Mfm0Ss",
  authDomain: "caja-task-manager.firebaseapp.com",
  databaseURL: "https://caja-task-manager-default-rtdb.firebaseio.com",
  projectId: "caja-task-manager",
  storageBucket: "caja-task-manager.appspot.com",
  messagingSenderId: "951307353431",
  appId: "1:951307353431:web:6e430ada66f8be72039212",
  measurementId: "G-Z60FNWQPP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);