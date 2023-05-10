import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRs2NDeCXH7JKGSqOf2SiW2WDFxhFL0Oc",
  authDomain: "newproject-5f323.firebaseapp.com",
  projectId: "newproject-5f323",
  storageBucket: "newproject-5f323.appspot.com",
  messagingSenderId: "921916516121",
  appId: "1:921916516121:web:e166b4938f4ac3b7cd4788",
  measurementId: "G-968FQT8YGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
