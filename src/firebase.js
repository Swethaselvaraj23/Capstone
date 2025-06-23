// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // ⬅️ This is crucial

const firebaseConfig = {
  apiKey: "AIzaSyCIgJkyw-ra7PzYebfiNVgqOlkItEnZxzs",
  authDomain: "tracklyn-2c5b4.firebaseapp.com",
  projectId: "tracklyn-2c5b4",
  storageBucket: "tracklyn-2c5b4.appspot.com", // ⬅️ Corrected `.app` to `.appspot.com`
  messagingSenderId: "576762764385",
  appId: "1:576762764385:web:1371bb7a7bcf4e283b5e20",
  measurementId: "G-C23XCVHVRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // ⬅️ Create auth instance

export { app, auth, analytics }; // ⬅️ Export auth here!
