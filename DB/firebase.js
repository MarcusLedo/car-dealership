import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, SENDER_ID, APP_ID } =
  process.env;

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
};

let app;
let firestoreDB;

console.log(firebaseConfig.apiKey);
console.log(firebaseConfig);

function initializeFirebaseApp() {
  app = initializeApp(firebaseConfig);
  firestoreDB = getFirestore();
}

function getFirebaseApp() {
  return app;
}

export { getFirebaseApp, initializeFirebaseApp };
