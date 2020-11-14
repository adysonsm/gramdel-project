import firebase from "firebase";
import "firebase/database";

const config  = {
    apiKey: "AIzaSyBDm2Lmwqe8jpzgErTfK_pyEI7LrGzWL98",
    authDomain: "gramdel-ed5ca.firebaseapp.com",
    databaseURL: "https://gramdel-ed5ca.firebaseio.com",
    projectId: "gramdel-ed5ca",
    storageBucket: "gramdel-ed5ca.appspot.com",
    messagingSenderId: "67870279179",
    appId: "1:67870279179:web:11c50fa1a1d0a06aa5e90e",
    measurementId: "G-EBBDC90YF0"
  };
  
  firebase.initializeApp(config);

  export default firebase.database();