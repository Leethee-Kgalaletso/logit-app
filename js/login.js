import { auth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "./firebase.js";

// dom elements
const email = document.getElementById("curr-email");
const password = document.getElementById("curr-password");
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;

    signInWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href = "logAlbum.html";
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
});

document.getElementById("google-login").addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        window.location.href = "logAlbum.html";
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
});