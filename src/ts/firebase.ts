import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBK2laqQm5IqZYTITypvtir7VY1dz74Zys",
  authDomain: "noteballs-b874b.firebaseapp.com",
  projectId: "noteballs-b874b",
  storageBucket: "noteballs-b874b.appspot.com",
  messagingSenderId: "692968752097",
  appId: "1:692968752097:web:4ff40e70021d7d363f88a0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { 
  db,
  auth 
};