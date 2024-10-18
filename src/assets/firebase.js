// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Authentication'ı içe aktar

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJdnmnu7Xn9MZBDrwJC08PLP1YiDwGsVQ",
  authDomain: "eminoruc-blog.firebaseapp.com",
  projectId: "eminoruc-blog",
  storageBucket: "eminoruc-blog.appspot.com",
  messagingSenderId: "974929838357",
  appId: "1:974929838357:web:6045a26a5ad24fb880691c",
  measurementId: "G-BGWMKQPDZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Authentication
const auth = getAuth(app);

// Export Firestore and Auth instance
export { db, auth };
