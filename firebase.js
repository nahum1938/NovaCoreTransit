// Importa los modulos necesarios
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

// Configuracion de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCLNCqA083B7EVNlQ7qzocXanWQ043s7Y",
  authDomain: "novacoretransit-7ee86.firebaseapp.com",
  projectId: "novacoretransit-7ee86",
  storageBucket: "novacoretransit-7ee86.appspot.com",
  messagingSenderId: "649843732880",
  appId: "1:649843732880:web:bc8eae890d116107e0ae55",
  measurementId: "G-Z7WD7PSVQW"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Registro de usuarios
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    alert("✅ Usuario registrado con éxito");
    registerForm.reset();
  } catch (error) {
    alert("❌ Error al registrar: " + error.message);
  }
});
// Inicio de sesión
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert("✅ Sesión iniciada correctamente");
      window.location.href = "panel.html"; // Redirige al panel del usuario
    } catch (error) {
      alert("❌ Error al iniciar sesión: " + error.message);
    }
  });
}