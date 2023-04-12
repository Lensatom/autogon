import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBGBdNmawT6N0MV7jxv0cFId8t4E6cQV58",
  authDomain: "autogon-923a0.firebaseapp.com",
  projectId: "autogon-923a0",
  storageBucket: "autogon-923a0.appspot.com",
  messagingSenderId: "242915037151",
  appId: "1:242915037151:web:d0afd0c6a47d6e2fb93e6a",
  measurementId: "G-JCZ55FB0LT"
};

const firebaseApp = initializeApp(firebaseConfig);
export const Database = getFirestore(firebaseApp);