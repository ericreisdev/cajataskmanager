import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Sua configuração do Firebase
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

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializar o Realtime Database e o Storage
const db = getDatabase(app);
const storage = getStorage(app);

export { db, storage };
