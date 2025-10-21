import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// for any .env secrets
dotenv.config();

// -------------------------------------------- server settings ----------------------------------------\\
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

// -------------------------------------------- using routes --------------------------------------------\\

app.get("/", (res, req) => {
  req.send("hello");
});

app.listen(PORT, () => {
  console.log(`listening on Port: ${PORT}`);
});
