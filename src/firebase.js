import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD_Z6sCpXatxbMirs525G6IkQKC0-Ys9GI",
    authDomain: "facebook-clone-dccf6.firebaseapp.com",
    projectId: "facebook-clone-dccf6",
    storageBucket: "facebook-clone-dccf6.appspot.com",
    messagingSenderId: "695676062335",
    appId: "1:695676062335:web:c2e817054ea2f0198a0d4a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;