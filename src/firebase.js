import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDYbAT-CzuUjpqApdv5dQdJVQGdmAFVvvU",
    authDomain: "facebook-messenger-clone-87e84.firebaseapp.com",
    projectId: "facebook-messenger-clone-87e84",
    storageBucket: "facebook-messenger-clone-87e84.appspot.com",
    messagingSenderId: "858916911453",
    appId: "1:858916911453:web:761378c75575e5e58a50b4",
    measurementId: "G-3YQ8D0MDWW"
});

const db = firebaseApp.firestore();

export default db;
