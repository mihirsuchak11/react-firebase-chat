import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDsot9z-oTb6krZYWIY9korR0m6QwJRrxc",
    authDomain: "facebook-messanger-591cb.firebaseapp.com",
    databaseURL: "https://facebook-messanger-591cb.firebaseio.com",
    projectId: "facebook-messanger-591cb",
    storageBucket: "facebook-messanger-591cb.appspot.com",
    messagingSenderId: "57730532606",
    appId: "1:57730532606:web:f979244048a950656391af"
})

const db = firebaseApp.firestore();

export default db;