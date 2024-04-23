import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaRivqeJAdj92z5dzu3F1iiZKizlqHyik",
  authDomain: "coffee-house-abc2a.firebaseapp.com",
  projectId: "coffee-house-abc2a",
  storageBucket: "coffee-house-abc2a.appspot.com",
  messagingSenderId: "147238712209",
  appId: "1:147238712209:web:c846e415e0c9f2a3232030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
