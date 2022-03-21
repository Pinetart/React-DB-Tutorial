import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALDEpKwjthdMLNHloMHoQvf0FNLKt-7Oo",
  authDomain: "thedojosite-e8dea.firebaseapp.com",
  projectId: "thedojosite-e8dea",
  storageBucket: "thedojosite-e8dea.appspot.com",
  messagingSenderId: "920992722463",
  appId: "1:920992722463:web:9d9fa06f509fa8045aef2a",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
