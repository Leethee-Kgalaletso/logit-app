import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCCHNOimwjX2pek-LoYVyX6p13lDTcpS7I",
    authDomain: "logit-prjct.firebaseapp.com",
    projectId: "logit-prjct",
    storageBucket: "logit-prjct.appspot.com",
    messagingSenderId: "288730862209",
    appId: "1:288730862209:web:067ca6abf4c08ae83b3380",
    measurementId: "G-2PY51DQ3DP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider };