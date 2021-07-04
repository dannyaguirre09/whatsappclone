import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCUpNAGMWysyQ3kFCN5btq-KrLAXEf3Wac",
    authDomain: "whatsapp-f70e5.firebaseapp.com",
    projectId: "whatsapp-f70e5",
    storageBucket: "whatsapp-f70e5.appspot.com",
    messagingSenderId: "437570940514",
    appId: "1:437570940514:web:7e945b6a8926fe30a5ab3b"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider(); 
  
  
  export {db, auth, provider }; 