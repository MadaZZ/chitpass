import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAafoV8SPUXAoqzXXyNnsmDI1oi9iaiNbY",
    authDomain: "chitpass-backend.firebaseapp.com",
    projectId: "chitpass-backend",
    storageBucket: "chitpass-backend.appspot.com",
    messagingSenderId: "684034376906",
    appId: "1:684034376906:web:36354b5c7d58a154826033"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => (auth.signInWithPopup(googleProvider));
export const getCurrentUser = () => (auth.currentUser);
export const signOut = () => auth.signOut();


export default firebase;
