// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA2EtWu84UVB7pcpOozUv4mJU3dIZm9Yc",
  authDomain: "codelab-gemini-api-exten-782d4.firebaseapp.com",
  projectId: "codelab-gemini-api-exten-782d4",
  storageBucket: "codelab-gemini-api-exten-782d4.firebasestorage.app",
  messagingSenderId: "355871108047",
  appId: "1:355871108047:web:4f8a89a28040dda38600ba",
  measurementId: "G-VZ7H9RYYFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };