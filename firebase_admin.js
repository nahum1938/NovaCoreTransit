import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Tu configuración de Firebase (REEMPLAZA ESTO POR TU CONFIG REAL)
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

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Verifica si es administrador
const adminEmail = "rodrigueznahum940@gmail.com"; // ← cambia esto por tu correo de admin

onAuthStateChanged(auth, (user) => {
  if (user) {
    if (user.email === adminEmail) {
      // Obtener y mostrar usuarios
      get(child(ref(db), "usuarios"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const usuarios = snapshot.val();
            const tabla = document.getElementById("usuariosTabla");
            tabla.innerHTML = "";

            Object.values(usuarios).forEach((usuario) => {
              const fila = document.createElement("tr");
              fila.innerHTML = `
                <td>${usuario.nombre}</td>
                <td>${usuario.email}</td>
                <td>$${parseFloat(usuario.saldo).toFixed(2)}</td>
              `;
              tabla.appendChild(fila);
            });
          }
        })
        .catch((error) => {
          console.error("Error al cargar usuarios:", error);
        });
    } else {
      alert("🚫 No tienes permisos para acceder al panel de administrador.");
      window.location.href = "panel.html";
    }
  } else {
    window.location.href = "login.html";
  }
});

// Botón de cerrar sesión
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
      window.location.href = "login.html";
    });
  });
}