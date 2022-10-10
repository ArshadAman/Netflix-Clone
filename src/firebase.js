import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyClsvHZ3352cXHjlKgwnIH9AD06n-UXBB8",
    authDomain: "netflix-clone2422.firebaseapp.com",
    projectId: "netflix-clone2422",
    storageBucket: "netflix-clone2422.appspot.com",
    messagingSenderId: "1058879402512",
    appId: "1:1058879402512:web:0277585d0e86a9ce52d095"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(firebaseApp);

export {auth};
export default db;