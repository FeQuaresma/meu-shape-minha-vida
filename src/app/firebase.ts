import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAb6-bh0BrjlybRJdY7x8pDgyisy5e_vRg",
  authDomain: "meu-shape-minha-vida.firebaseapp.com",
  projectId: "meu-shape-minha-vida",
  storageBucket: "meu-shape-minha-vida.appspot.com",
  messagingSenderId: "806515384841",
  appId: "1:806515384841:web:cd0e0b0a839cea46c6ced8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
