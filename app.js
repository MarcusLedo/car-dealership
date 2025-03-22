import { addData } from "./DB/firebase.js";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __file = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__file);
const app = express();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here!");
  res.render("home");
});

app.listen(3000, () => {
  console.log("Listening on port 3000.");
});
