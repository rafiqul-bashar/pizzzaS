import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA5ButtH4x4J3HuwapTOyxhhgV5ZWLKc74",
  authDomain: "redux-tut-e7ad4.firebaseapp.com",
  databaseURL:
    "https://redux-tut-e7ad4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "redux-tut-e7ad4",
  storageBucket: "redux-tut-e7ad4.appspot.com",
  messagingSenderId: "538889273889",
  appId: "1:538889273889:web:24d603fe7eabb3e6565960",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export { auth };
export default db;
