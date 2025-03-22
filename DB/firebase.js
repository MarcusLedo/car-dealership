import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAcc from "/home/callisto/Documents/my-car-dealership-f5e0d-firebase-adminsdk-fbsvc-a3d3c7c755.json" assert { type: "json" };

initializeApp({
  credential: cert(serviceAcc),
});

let db;

initializeFirebaseDB();
main();

async function main() {}

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

async function getData() {
  const transactionRef = db.collection("transactions");
  const snapshot = await transactionRef.get();
  const data = [];

  snapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
}

export { addData, getData };
