import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import {getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
import firebase from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyCCHNOimwjX2pek-LoYVyX6p13lDTcpS7I",
authDomain: "logit-prjct.firebaseapp.com",
projectId: "logit-prjct",
storageBucket: "logit-prjct.firebasestorage.app",
messagingSenderId: "288730862209",
appId: "1:288730862209:web:067ca6abf4c08ae83b3380",
measurementId: "G-2PY51DQ3DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// fetch using spotify api

// client id on spotify; 431efc94c1b54aa0a4bef3bc41f88fbd
