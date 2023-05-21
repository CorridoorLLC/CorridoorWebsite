import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqcB80k-WfmCDD3zY0ZqsH9Q4ohW-MsfM",
  authDomain: "corridoor-f4ebe.firebaseapp.com",
  projectId: "corridoor-f4ebe",
  storageBucket: "corridoor-f4ebe.appspot.com",
  messagingSenderId: "529177976415",
  appId: "1:529177976415:web:132899a75c562d0b2785ea",
  measurementId: "G-G4YVZ2RNCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

//Initialize Auth
const auth = getAuth(app);

export { db, storage, auth };

export const initFireBase = () => {
  return app;
}
