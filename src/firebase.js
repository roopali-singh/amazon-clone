import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDIKcKU8PqS2KSYtCE8pQ57dGUWcnb-4qM",
    authDomain: "amozon-clone-1.firebaseapp.com",
    databaseURL: "https://amozon-clone-1.firebaseio.com",
    projectId: "amozon-clone-1",
    storageBucket: "amozon-clone-1.appspot.com",
    messagingSenderId: "1009968790236",
    appId: "1:1009968790236:web:a732fcaaca1602a6889219",
    measurementId: "G-9HTC2Z7KED"
  };

// Initialize the app with the firebaseConfig
// Intialize the database (firestore => real-time database in firebase)
// Gives us a variable used to handle all the signing-in

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

// Export these two thing, the database and the authetication, and use this outside of the file
export { db, auth };
