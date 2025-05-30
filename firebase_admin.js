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
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  databaseURL: "TU_DATABASE_URL",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Verifica si es administrador
const adminEmail = "tucorreo@admin.com"; // ← cambia esto por tu correo de admin

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