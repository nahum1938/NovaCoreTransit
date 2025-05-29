// Importaciones Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Configuración Firebase (reemplaza con la tuya)
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Lógica de registro
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("✅ Usuario registrado con éxito");
    registerForm.reset();
  } catch (error) {
    alert("❌ Error al registrar: " + error.message);
  }
});
