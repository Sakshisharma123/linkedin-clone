import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcViRCpb76n97jhpM42SZDgGDkUpNdTyk",
    authDomain: "linkedin-clone-1e978.firebaseapp.com",
    projectId: "linkedin-clone-1e978",
    storageBucket: "linkedin-clone-1e978.appspot.com",
    messagingSenderId: "402994202727",
    appId: "1:402994202727:web:6fa06cfba23cbf8771ecc2",
  
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};