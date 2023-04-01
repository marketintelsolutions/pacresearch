import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjyDjOM5O2nXzRNaLZQQZEzo8JWAdI17Y",
  authDomain: "pacresearch-feb77.firebaseapp.com",
  projectId: "pacresearch-feb77",
  storageBucket: "pacresearch-feb77.appspot.com",
  messagingSenderId: "232392725516",
  appId: "1:232392725516:web:2e26e94cafaf96a18bca29",
  measurementId: "G-GPH800339J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
