import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAcc from "/home/callisto/Documents/my-car-dealership-f5e0d-firebase-adminsdk-fbsvc-a3d3c7c755.json" assert { type: "json" };

initializeApp({
  credential: cert(serviceAcc),
});

let db;

const testData = {
  totalValue: 345,
  seller: "LuzaII",
  discount: 12,
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
