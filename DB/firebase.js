import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAcc from "/home/callisto/Documents/my-car-dealership-f5e0d-firebase-adminsdk-fbsvc-a3d3c7c755.json" assert { type: "json" };
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
};

initializeApp({
  credential: cert(serviceAcc),
});

let db;

const testData = {
  totalValue: 2302,
  seller: "IO",
  discount: 203,
};

initializeFirebaseDB();
addData(testData);

function initializeFirebaseDB() {
  try {
    db = getFirestore();
  } catch (err) {
    console.log("Oh no! " + err);
  }
}

async function addData(data) {
  const res = await db.collection("transactions").add(data);
}

export { addData };
