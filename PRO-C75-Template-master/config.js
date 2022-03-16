import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBEZS46FL29EJO_MkXlBPG5zqN74AwiTgg",
  authDomain: "e-ride-f6920.firebaseapp.com",
  projectId: "e-ride-f6920",
  storageBucket: "e-ride-f6920.appspot.com",
  messagingSenderId: "240069328663",
  appId: "1:240069328663:web:aebabb52cbce839bbb0152"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
