// Aquí debes pegar tu firebaseConfig
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  // 🔐 PEGA AQUÍ TU CONFIGURACIÓN DE FIREBASE
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Aquí puedes añadir el manejo de login y registro...
