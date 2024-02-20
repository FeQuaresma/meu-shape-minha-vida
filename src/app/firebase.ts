import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGNSENDERID,
  appId: process.env.APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
