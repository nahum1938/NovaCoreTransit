// Importa los módulos necesarios
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCLhQa08387EV7EN7f0720KcmW0465a7fY",
  authDomain: "novacoretransit-7ee86.firebaseapp.com",
  projectId: "novacoretransit-7ee86",
  storageBucket: "novacoretransit-7ee86.appspot.com",
  messagingSenderId: "649043742880",
  appId: "1:649043742880:web:bc8eae89d0116107e0ae55",
  measurementId: "G-27DW7PSC0W"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Aquí puedes añadir el manejo de login y registro...