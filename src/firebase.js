// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "vaibhav-estate.firebaseapp.com",
  projectId: "vaibhav-estate",
  storageBucket: "vaibhav-estate.appspot.com",
  messagingSenderId: "402323309783",
  appId: "1:402323309783:web:3158531e7b1e833caf9c92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);