// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAU3JQcnpNMG_skBtG8_Cfvcoh_v2RfYk",
    authDomain: "netflix-b5fb9.firebaseapp.com",
    projectId: "netflix-b5fb9",
    storageBucket: "netflix-b5fb9.appspot.com",
    messagingSenderId: "902912063797",
    appId: "1:902912063797:web:b6d9b21d4ec491ac54747c",
    measurementId: "G-MC9DVYD5DG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
