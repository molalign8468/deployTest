import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const port = 5000;
const app = express();
app.use(cors());

export const db = new pg.Client({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE,
  port: 5432,
});
db.connect();

app.get("/", async (req, res) => {
  const responce = await db.query("SELECT * From userr");
  const result = responce.rows;
  res.json({ result: result });
});
app.get("/questionn", async (req, res) => {
  const responce = await db.query("SELECT * From questionn");
  const result = responce.rows;
  res.json({ questionn: result });
});
app.get("/answer", async (req, res) => {
  const responce = await db.query("SELECT * From answer");
  const result = responce.rows;
  res.json({ answer: result });
});

app.listen(port, () => {
  console.log("is listining Sucess");
});
