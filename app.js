import { addData, getData } from "./DB/firebase.js";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __file = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__file);
const app = express();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Here!");
  res.render("home");
});

app.get("/transactions", async (req, res) => {
  //List all transaction in the DB
  const data = await getData();
  //console.log(data);

  res.render("transactions", { data });
});

app.get("/transaction/new", (req, res) => {
  res.render("newTransaction");
});

app.post("/transactions", async (req, res) => {
  const data = req.body;
  await addData(data);
  res.redirect("/transactions");
});

app.listen(3000, () => {
  console.log("Listening on port 3000.");
});
