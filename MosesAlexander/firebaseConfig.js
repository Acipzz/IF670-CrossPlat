import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCIyptTRhCSFrLgio4Df0XpHHHoL3_aTiI",
    authDomain: "crossplat-36aad.firebaseapp.com",
    projectId: "crossplat-36aad",
    storageBucket: "crossplat-36aad.firebasestorage.app",
    messagingSenderId: "463379299449",
    appId: "1:463379299449:web:ac2b898ac93f8a6066e8a8",
    measurementId: "G-0CW3FKNKQM"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };