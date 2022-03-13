import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPqQTH-UJyITaWVWavrXf9zdnqgU0dpE8",
  authDomain: "readingapplist.firebaseapp.com",
  projectId: "readingapplist",
  storageBucket: "readingapplist.appspot.com",
  messagingSenderId: "681659827309",
  appId: "1:681659827309:web:dc07b37f861a00c0ad6b64",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFireStore();

export { db };
