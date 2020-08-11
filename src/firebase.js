import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDQIQG4TDuc5MP6KWxkdYwqcXKHID6sS5Y",
  authDomain: "react-twitter-clone-917ea.firebaseapp.com",
  databaseURL: "https://react-twitter-clone-917ea.firebaseio.com",
  projectId: "react-twitter-clone-917ea",
  storageBucket: "react-twitter-clone-917ea.appspot.com",
  messagingSenderId: "769391094294",
  appId: "1:769391094294:web:e873365637a86b1262e337",
  measurementId: "G-14N5EEN67G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;