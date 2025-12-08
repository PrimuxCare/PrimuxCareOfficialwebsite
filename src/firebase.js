import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk9wDSCawB74SKOl3qXKBrtmXfmtVKC8E",
  authDomain: "primuxcare-99ced.firebaseapp.com",
  projectId: "primuxcare-99ced",
  storageBucket: "primuxcare-99ced.firebasestorage.app",
  messagingSenderId: "753600741484",
  appId: "1:753600741484:web:23cebe13e0a05748cc1849",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);
