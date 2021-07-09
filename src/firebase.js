import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDgRnS2ZByGU7aXtkwXB_xGkDMya1-S9kY",
    authDomain: "netflix-clone-6e4b2.firebaseapp.com",
    projectId: "netflix-clone-6e4b2",
    storageBucket: "netflix-clone-6e4b2.appspot.com",
    messagingSenderId: "493165648506",
    appId: "1:493165648506:web:cedcfe9241f4480cc339c3",
    measurementId: "G-ZLL5284X21"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db;