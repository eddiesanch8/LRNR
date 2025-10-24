import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initQuestionsTable } from "./config/sqlUtils.js";
import { seedQuestions } from "./config/sqlUtils.js";
import questionRouter from "./routes/quizroutes.js";
import connectToDatabase from "./config/db.js";
// for any .env secrets
dotenv.config();

// -------------------------------------------- server settings ----------------------------------------\\
const app = express();
const PORT = 8000;
connectToDatabase();
initQuestionsTable();
seedQuestions();

app.use(express.json());
app.use(cors());
app.use("/api/questions", questionRouter);

// -------------------------------------------- using routes --------------------------------------------\\

app.get("/", (res, req) => {
  req.send("hello");
});

app.listen(PORT, () => {
  console.log(`listening on Port: ${PORT}`);
});
