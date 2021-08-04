import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDK0s9rvmhr_P4Z5L_Loc9a-E8593Ya-xs",
    authDomain: "linkedin-clone-2fa2c.firebaseapp.com",
    projectId: "linkedin-clone-2fa2c",
    storageBucket: "linkedin-clone-2fa2c.appspot.com",
    messagingSenderId: "585649363556",
    appId: "1:585649363556:web:0b91c23d67e3f271315d71"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();


