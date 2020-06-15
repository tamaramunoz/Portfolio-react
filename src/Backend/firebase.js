import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDnHkECWB5Snt8cKOMaA5ooLPi6bSMpktI",
    authDomain: "tamara-munoz.firebaseapp.com",
    databaseURL: "https://tamara-munoz.firebaseio.com",
    projectId: "tamara-munoz",
    storageBucket: "tamara-munoz.appspot.com",
    messagingSenderId: "892091834260",
    appId: "1:892091834260:web:27746fa439991794fb3981"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebase, db, auth, storage }