// // Import the functions you need from the SDKs you need
// import firebase from "firebase";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD8tJzNxX5LId_LmHEr4UdbNz_bbHwXJhY",
//   authDomain: "newsapp-97a26.firebaseapp.com",
//   projectId: "newsapp-97a26",
//   storageBucket: "newsapp-97a26.appspot.com",
//   messagingSenderId: "620604431023",
//   appId: "1:620604431023:web:6df5c7e9003ff090ea525a",
//   measurementId: "G-VBV6645SB7",
// };

// // Initialize Firebase
// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// export default firebase;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8tJzNxX5LId_LmHEr4UdbNz_bbHwXJhY",
  authDomain: "newsapp-97a26.firebaseapp.com",
  projectId: "newsapp-97a26",
  storageBucket: "newsapp-97a26.appspot.com",
  messagingSenderId: "620604431023",
  appId: "1:620604431023:web:6df5c7e9003ff090ea525a",
  measurementId: "G-VBV6645SB7",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
