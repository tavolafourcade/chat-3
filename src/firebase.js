import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyApus-9HLfR_su9_I-xL0bsVtfVKTdEnE4",
    authDomain: "chat-3-81678.firebaseapp.com",
    projectId: "chat-3-81678",
    storageBucket: "chat-3-81678.appspot.com",
    messagingSenderId: "61367360991",
    appId: "1:61367360991:web:15edfc81babf89f351786a",
    measurementId: "G-Y08G6RE8TC"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider}