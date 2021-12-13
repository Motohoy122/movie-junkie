// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore/lite';
import "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaa4hsKha2qpfnbOKerJPzTd6qSxZ3kUE",
  authDomain: "movie-junkie-e0f68.firebaseapp.com",
  projectId: "movie-junkie-e0f68",
  storageBucket: "movie-junkie-e0f68.appspot.com",
  messagingSenderId: "487727457504",
  appId: "1:487727457504:web:4509a103ca24c6d9a21c85",
  measurementId: "${config.measurementId}"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);


export { auth, provider, storage };
export default db;