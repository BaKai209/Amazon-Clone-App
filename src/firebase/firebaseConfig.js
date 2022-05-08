// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwsVdSOihfNboo7QjJ1bUWvXZ7jAt92gs",
  authDomain: "as-c93e1.firebaseapp.com",
  projectId: "as-c93e1",
  storageBucket: "as-c93e1.appspot.com",
  messagingSenderId: "473620096762",
  appId: "1:473620096762:web:a27fedf48e62ad50438b43",
  measurementId: "G-SQ2DQQ9V21"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
  app, 
  google, 
  facebook,
  db
}