import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLCNqa0B387EVNnIQrazoXanW0Q43s7Y",
  authDomain: "novacoretransit-7ee86.firebaseapp.com",
  databaseURL: "https://novacoretransit-7ee86-default-rtdb.firebaseio.com",
  projectId: "novacoretransit-7ee86",
  storageBucket: "novacoretransit-7ee86.appspot.com",
  messagingSenderId: "649834732880",
  appId: "1:649834732880:web:bc8eae809d1161070ea055",
  measurementId: "G-27WD7PSVQW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };