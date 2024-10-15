function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
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
            closeModal('signupModal');
            alert('Signup successful!');
        })
        .catch((error) => {
            console.error("Error signing up: ", error);
            alert('Signup failed: ' + error.message);
        });
}
