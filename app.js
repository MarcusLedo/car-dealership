import { addData } from "./DB/firebase.js";

main();

async function main() {
  const testData = {
    totalValue: 432,
    seller: "I'm alive",
    discount: 293,
  };

  await addData(testData);
}
