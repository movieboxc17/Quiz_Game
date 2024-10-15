// Initialize Firebase
 const firebaseConfig = {
    apiKey: "AIzaSyAnJ3yO-E75Saf9_u8KVWLQePy3RZyX-fI",
    authDomain: "quiz-game-42366.firebaseapp.com",
    projectId: "quiz-game-42366",
    storageBucket: "quiz-game-42366.appspot.com",
    messagingSenderId: "901178406784",
    appId: "1:901178406784:web:583405d18656deed26b365",
    measurementId: "G-JE6NWVFKKL"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
