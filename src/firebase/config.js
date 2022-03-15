import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmwhM7UvlFGv2EF_N5zgwSvSC9o5tjvio",
  authDomain: "mymoney-14d56.firebaseapp.com",
  projectId: "mymoney-14d56",
  storageBucket: "mymoney-14d56.appspot.com",
  messagingSenderId: "1000321034498",
  appId: "1:1000321034498:web:3aacce793a4b23a22a7a1b",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
