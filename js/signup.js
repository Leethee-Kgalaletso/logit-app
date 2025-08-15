import { auth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "./firebase.js";


// dom
const email = document.getElementById("user-email");
const password = document.getElementById("user-password");
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;

    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User signed up:", user);
            // Redirect or show success message
            window.location.href = "index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error signing up:", errorCode, errorMessage);
            alert("Error signing up: " + errorMessage);
        });
});

document.getElementById("google-signup").addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log("User signed up with Google:", user);
            // Redirect or show success message
            window.location.href = "index.html";
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error signing up with Google:", errorCode, errorMessage);
            alert("Error signing up with Google: " + errorMessage);
        });
});