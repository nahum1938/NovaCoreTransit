console.log("🔥 firebase.js cargado correctamente");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLCNqaO83B7EVNnIQrazocXanW0Q43s7Y",
  authDomain: "novacoretransit-7ee86.firebaseapp.com",
  databaseURL: "https://novacoretransit-7ee86-default-rtdb.firebaseio.com",
  projectId: "novacoretransit-7ee86",
  storageBucket: "novacoretransit-7ee86.firebasestorage.app",
  messagingSenderId: "649834732880",
  appId: "1:649834732880:web:bc8eae809d1161070ea055",
  measurementId: "G-27WD7PSVQW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
