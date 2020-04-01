import firebase from "firebase";
require("firebase/firestore");
        // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyADSrCEcWvdtJnhF0OwGfXpc03B6EiCmLo",
    authDomain: "react-firebase-39232.firebaseapp.com",
    databaseURL: "https://react-firebase-39232.firebaseio.com",
    projectId: "react-firebase-39232",
    storageBucket: "react-firebase-39232.appspot.com",
    messagingSenderId: "819984279458",
    appId: "1:819984279458:web:deae571bbb250f2fbf34fb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;
