import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBsoOc3jTxMPDZYxmThU17LTltBxmKW0I4",
    authDomain: "foros-de-queja.firebaseapp.com",
    projectId: "foros-de-queja",
    storageBucket: "foros-de-queja.appspot.com",
    messagingSenderId: "771907829398",
    appId: "1:771907829398:web:3b2db72cac16be8ac14cb7"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
