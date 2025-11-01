// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeJMh6W7I3yVDQqEJQzw8CegsD8NYEVU4",
  authDomain: "modul-trigono.firebaseapp.com",
  projectId: "modul-trigono",
  storageBucket: "modul-trigono.appspot.com", // ✅ diperbaiki!
  messagingSenderId: "980014540419",
  appId: "1:980014540419:web:86285499e9fe06c823ddb6",
  measurementId: "G-NWLCNBXEQ6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
