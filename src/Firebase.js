import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyANS5QLVuX54pBMUs2b8JxyAqte-vWMU4U",
  authDomain: "twitter-e48c3.firebaseapp.com",
  projectId: "twitter-e48c3",
  storageBucket: "twitter-e48c3.appspot.com",
  messagingSenderId: "1061316178192",
  appId: "1:1061316178192:web:8d66e3f7a451a000fc7595",
  measurementId: "G-MDJEMDH2ZC"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;