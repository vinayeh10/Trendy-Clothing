import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCUzqS3v-xauiCzPBj-YKkYdHzRGd61O64",
    authDomain: "trendy-shop-db.firebaseapp.com",
    databaseURL: "https://trendy-shop-db.firebaseio.com",
    projectId: "trendy-shop-db",
    storageBucket: "trendy-shop-db.appspot.com",
    messagingSenderId: "335241255692",
    appId: "1:335241255692:web:54178538001ba85edd8729",
    measurementId: "G-STXZ3HQGD6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;