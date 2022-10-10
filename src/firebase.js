import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //  YOUR FIREBASE CONFIGURATION DETALS HERE, GET IT FROM THE PROJECT SETTINGS OF YOUR FIREBASE WEB PROJECT
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(firebaseApp);

export { auth };
export default db;
