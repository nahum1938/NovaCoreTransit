console.log("🔥 firebase.js cargado correctamente");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLCNqa083B7EVNnIQrazocXanW0Q43s7Y",
  authDomain: "novacoretransit-7ee86.firebaseapp.com",
  databaseURL: "https://novacoretransit-7ee86-default-rtdb.firebaseio.com",
  projectId: "novacoretransit-7ee86",
  storageBucket: "novacoretransit-7ee86.appspot.com",
  messagingSenderId: "649843732880",
  appId: "1:649843732880:web:bc8eae809d1161070ea055",
  measurementId: "G-27WD7PSVQW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Registro
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await set(ref(db, 'usuarios/' + user.uid), {
        nombre: name,
        correo: email,
        saldo: 0.00
      });
      alert("✅ Usuario registrado con éxito");
      registerForm.reset();
      window.location.href = "login.html";
    } catch (error) {
      alert("❌ Error al registrar: " + error.message);
    }
  });
}

// Inicio de sesión
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Sesión iniciada correctamente");
      window.location.href = "panel.html";
    } catch (error) {
      alert("❌ Error al iniciar sesión: " + error.message);
    }
  });
}

// Verificar sesión
onAuthStateChanged(auth, (user) => {
  if (window.location.pathname.includes("panel.html")) {
    if (user) {
      get(child(ref(db), 'usuarios/' + user.uid)).then(snapshot => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          document.getElementById("username").textContent = data.nombre;
          document.getElementById("saldo").textContent = `$${data.saldo.toFixed(2)}`;
        }
      });
    } else {
      window.location.href = "login.html";
    }
  }
});

// Cierre de sesión
const logoutBtn = document.getElementById("logout");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);
      alert("✅ Sesión cerrada");
      window.location.href = "index.html";
    } catch (error) {
      alert("❌ Error al cerrar sesión: " + error.message);
    }
  });
});