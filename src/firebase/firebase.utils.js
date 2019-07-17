import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB4bEGqWjwNbPMWvB-SbObxHi4VKLPzd6M",
    authDomain: "crwn-db-8370f.firebaseapp.com",
    databaseURL: "https://crwn-db-8370f.firebaseio.com",
    projectId: "crwn-db-8370f",
    storageBucket: "",
    messagingSenderId: "1026485375729",
    appId: "1:1026485375729:web:0e69ce72853a3cff"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;