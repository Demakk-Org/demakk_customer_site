// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

export const googleProvider = new GoogleAuthProvider();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPaVMZ7HZhBTmLiYZvGktcYQGA19piS20",
  authDomain: "demakk-customer-site.firebaseapp.com",
  projectId: "demakk-customer-site",
  storageBucket: "demakk-customer-site.appspot.com",
  messagingSenderId: "419740168381",
  appId: "1:419740168381:web:514be21b6c100ac35f47d4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const imageStorage = getStorage(
  app,
  "gs://demakk-customer-site.appspot.com"
);
