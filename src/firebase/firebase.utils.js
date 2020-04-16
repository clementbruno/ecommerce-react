import firebase from "firebase/app";
import "firebase/firestore"; // Database
import "firebase/auth"; // Authentication

const config = {
  apiKey: "AIzaSyDwhyo4xQUDWtyB3HzlrBvUX8ZjR7zKe8w",
  authDomain: "ecommerce-react-37718.firebaseapp.com",
  databaseURL: "https://ecommerce-react-37718.firebaseio.com",
  projectId: "ecommerce-react-37718",
  storageBucket: "ecommerce-react-37718.appspot.com",
  messagingSenderId: "1002039854504",
  appId: "1:1002039854504:web:22288baa92eff17b26c99d",
  measurementId: "G-5V5760FJBW",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // always trigger google pop-up when using google auth provider for sign-up and sign-in
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
