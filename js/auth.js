function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successfully logged in
            closeModal('loginModal');
            alert('Login successful!');
        })
        .catch((error) => {
            console.error("Error logging in: ", error);
            alert('Login failed: ' + error.message);
        });
}

function signup() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successfully signed up
            closeModal('signupModal');
            alert('Signup successful!');
        })
        .catch((error) => {
            console.error("Error signing up: ", error);
            alert('Signup failed: ' + error.message);
        });
}

auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        console.log('User is signed in:', user);
    } else {
        // User is signed out
        console.log('No user is signed in');
    }
});
