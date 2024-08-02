import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWy35TrmItd-OQxM09_Khxr7hLfcM_6B8",
  authDomain: "atmosware-staj.firebaseapp.com",
  projectId: "atmosware-staj",
  storageBucket: "atmosware-staj.appspot.com",
  messagingSenderId: "347340883872",
  appId: "1:347340883872:web:194da5c770392f445f46c5",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
